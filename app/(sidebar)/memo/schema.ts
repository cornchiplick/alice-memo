import {z} from "zod";

export const memoSchema = z.object({
  title: z.string({
    required_error: "Title is required.",
  }),
  content: z.string({
    required_error: "Content is required.",
  }),
});
