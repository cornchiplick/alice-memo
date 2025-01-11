"use client";
import {ButtonHTMLAttributes} from "react";

interface ButtonProps {
  text: string;
}

export default function Button({
  text = "",
  disabled = false,
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      disabled={disabled}
      // className="primary-btn h-10 disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:text-neutral-300"
    >
      {disabled ? "로딩 중" : text}
    </button>
  );
}
