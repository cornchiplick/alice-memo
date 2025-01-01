"use client";

import {MemoFormDataType, memoSchema} from "@/app/(sidebar)/memo/schema";
import {Constants} from "@/constants/constants";
import {MemoFormProps} from "@/types/memo/memo";
import {generateUUID} from "@/utils/utils";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import Input from "./Input";

const MemoForm = ({setAllMemo}: MemoFormProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const {
    register,
    reset,
    getValues,
    handleSubmit,
    formState: {errors},
  } = useForm<MemoFormDataType>({
    resolver: zodResolver(memoSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const handleFocus = () => {
    setShowForm(true);
  };

  const save: SubmitHandler<MemoFormDataType> = async (data) => {
    const result = memoSchema.safeParse(data);
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
    reset();
    setAllMemo(memoArray);
  };

  const handleBlur = async (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      const data = getValues();
      const result = memoSchema.safeParse(data);
      if (!result.success) {
        await handleSubmit(save)();
        return;
      } else {
        await handleSubmit(save)();
        setShowForm(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(save)}>
      <div
        className="flex w-full flex-col items-center justify-center gap-2 py-5"
        onBlur={handleBlur}>
        <Input
          {...register("title", {required: true})}
          required
          type="text"
          placeholder={showForm ? "title" : "Write memo..."}
          errors={[errors.title?.message ?? ""]}
          onFocus={handleFocus}
        />
        {showForm && (
          <Input
            {...register("content", {required: true})}
            required
            type="text"
            placeholder="content"
            errors={[errors.content?.message ?? ""]}
          />
        )}
      </div>
    </form>
  );
};

export default MemoForm;
