"use client";

import MemoForm from "@/components/MemoForm";
import {Constants} from "@/constants/constants";
import {Memo} from "@/types/memo/memo";
import {useEffect, useState} from "react";

const GuestMemoHome = () => {
  const [allMemo, setAllMemo] = useState<Memo[]>([]);

  useEffect(() => {
    const memoAll = localStorage.getItem(Constants.ALICE_MEMO_ALL) || "";
    let memoArray = [];
    if (!!memoAll) {
      memoArray = JSON.parse(memoAll);
      setAllMemo(memoArray);
    }
  }, []);

  return (
    <div className="w-full">
      <MemoForm setAllMemo={setAllMemo} />
      <div>
        <h2>All Memos</h2>
        <div className="flex flex-col gap-2">
          {allMemo.map((memo) => (
            <MemoComp key={memo.id} memo={memo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuestMemoHome;

const MemoComp = ({memo}: {memo: Memo}) => {
  return (
    <div className="border border-gray-400 p-1">
      <p>
        <span className="text-red-400">id : </span>
        <span>{memo.id}</span>
      </p>
      <p>
        <span className="text-red-400">title : </span>
        <span>{memo.title}</span>
      </p>
      <p>
        <span className="text-red-400">content : </span>
        <span>{memo.content}</span>
      </p>
    </div>
  );
};
