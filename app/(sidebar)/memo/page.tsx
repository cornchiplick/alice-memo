"use client";

import {Constants} from "@/constants/constants";
import {generateUUID} from "@/utils/utils";
import {useEffect, useRef, useState} from "react";

const MemoHome = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [allMemo, setAllMemo] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const content = formData.get("content")?.toString() || "";

    const uuid = generateUUID();
    const itemKey = `${Constants.ALICE_MEMO_ITEM}_${uuid}`;

    localStorage.setItem(itemKey, content);

    const memoAll = localStorage.getItem(Constants.ALICE_MEMO_ALL) || "";

    let memoArray = [];
    if (memoAll) {
      try {
        memoArray = JSON.parse(memoAll);
      } catch (e) {
        console.error("Failed to parse ALICE_MEMO_ALL storage: ", e);
      }
    }

    memoArray.push(itemKey);
    localStorage.setItem(Constants.ALICE_MEMO_ALL, JSON.stringify(memoArray));
    setAllMemo(memoArray);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    const memoAll = localStorage.getItem(Constants.ALICE_MEMO_ALL) || "";
    let memoArray = [];
    if (!!memoAll) {
      memoArray = JSON.parse(memoAll);
      setAllMemo(memoArray);
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          required
          type="text"
          placeholder="content"
          name="content"
          className="rounded-md border-none bg-transparent"
        />
        <button type="submit">추가</button>
      </form>
      <div>
        <h2>All Memos</h2>
        {allMemo.map((memo) => (
          <MemoComp key={memo} memoKey={memo} />
        ))}
      </div>
    </div>
  );
};

export default MemoHome;

const MemoComp = ({memoKey}: {memoKey: string}) => {
  const content = localStorage.getItem(memoKey) || "";

  return <div>{`${memoKey}: ${content}`}</div>;
};
