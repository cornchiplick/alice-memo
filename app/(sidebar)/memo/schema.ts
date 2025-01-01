import {z} from "zod";

export const memoSchema = z.object({
  title: z
    .string({
      required_error: "Title is required.",
    })
    .trim()
    .min(1, {message: "Title is required."}),
  content: z
    .string({
      required_error: "Content is required.",
    })
    .trim()
    .min(1, {message: "Content is required."}),
});

export type MemoFormDataType = z.infer<typeof memoSchema>;
