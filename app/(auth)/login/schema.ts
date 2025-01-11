import {Authentication} from "@/constants/constants";
import {z} from "zod";

export const authenticationSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(Authentication.PASSWORD_MIN_LENGTH),
  // .regex(Authentication.PASSWORD_REGEX, Authentication.PASSWORD_REGEX_ERROR),
});

export type AuthenticationType = z.infer<typeof authenticationSchema>;
