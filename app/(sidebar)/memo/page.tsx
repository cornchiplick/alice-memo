"use client";

import {COOKIE} from "@/constants/constants";
import {getCookie, setCookie} from "cookies-next";
import crypto from "crypto";
import {useEffect, useState} from "react";

const MemoHome = () => {
  const [allMemo, setAllMemo] = useState<string[]>([]);

  useEffect(() => {
    const memoAll = getCookie(COOKIE.ALICE_MEMO_ALL);
    let memoArray = [];
    if (!!memoAll) {
      memoArray = JSON.parse(memoAll as string);
      setAllMemo(memoArray);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const content = formData.get("content");

    const uuid = crypto.randomBytes(16).toString("hex");
    const itemKey = `${COOKIE.ALICE_MEMO_ITEM}_${uuid}`;

    setCookie(itemKey, content);

    const memoAll = getCookie(COOKIE.ALICE_MEMO_ALL);

    let memoArray = [];
    if (memoAll) {
      try {
        memoArray = JSON.parse(memoAll as string);
      } catch (e) {
        console.error("Failed to parse ALICE_MEMO_ALL cookies: ", e);
      }
    }

    memoArray.push(itemKey);
    setCookie(COOKIE.ALICE_MEMO_ALL, JSON.stringify(memoArray));
    setAllMemo(memoArray);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
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
          <div key={memo}>{memo}</div>
        ))}
      </div>
    </div>
  );
};

export default MemoHome;
