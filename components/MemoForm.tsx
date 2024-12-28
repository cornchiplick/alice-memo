"use client";

import {memoSchema} from "@/app/(sidebar)/memo/schema";
import {Constants} from "@/constants/constants";
import {MemoFormData, MemoFormProps} from "@/types/memo/Memo";
import {generateUUID} from "@/utils/utils";
import {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

const MemoForm = ({setAllMemo}: MemoFormProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const {register, reset, handleSubmit} = useForm<MemoFormData>();

  const handleFocus = () => {
    setShowForm(true);
  };

  const save: SubmitHandler<MemoFormData> = async (data) => {
    const result = memoSchema.safeParse(data);
    if (!result.success) {
      return result.error.flatten();
    } else {
      const uuid = generateUUID(`${Constants.ALICE_MEMO_ITEM}_`);
      const memo = {
        id: uuid,
        ...result.data,
      };

      const memoAll = localStorage.getItem(Constants.ALICE_MEMO_ALL) || "";

      let memoArray = [];
      if (memoAll) {
        try {
          memoArray = JSON.parse(memoAll);
        } catch (e) {
          console.error("Failed to parse ALICE_MEMO_ALL storage: ", e);
          localStorage.removeItem(Constants.ALICE_MEMO_ALL);
          return;
        }
      }

      memoArray.push(memo);
      localStorage.setItem(Constants.ALICE_MEMO_ALL, JSON.stringify(memoArray));
      reset({
        title: "",
        content: "",
      });
      setAllMemo(memoArray);
    }
  };

  const handleBlur = async (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      await handleSubmit(save)();
      setShowForm(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(save)}>
      <div
        className="flex w-full flex-col items-center justify-center gap-2 py-5"
        onBlur={handleBlur}>
        <input
          {...register("title", {required: true})}
          required
          type="text"
          placeholder={showForm ? "title" : "Write memo..."}
          defaultValue={""}
          onFocus={handleFocus}
          className="h-11 w-[600px] rounded-lg border border-solid border-alice-500 bg-transparent text-base font-semibold"
        />
        {showForm && (
          <input
            {...register("content", {required: true})}
            required
            type="text"
            placeholder="content"
            className="h-11 w-[600px] rounded-lg border border-solid border-alice-500 bg-transparent text-base font-semibold"
          />
        )}
      </div>
    </form>
  );
};

export default MemoForm;
