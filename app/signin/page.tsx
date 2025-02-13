// import Input from "@/components/Input";
// import { useForm } from "react-hook-form";

// const formSchema = z
//   .object({
//     username: z
//       .string({
//         invalid_type_error: "Username must be a string!",
//         required_error: "Where is my username???",
//       })
//       .toLowerCase()
//       .trim()
//       // .transform((username) => `🔥 ${username} 🔥`)
//       .refine(checkUsername, "No Potatoes allowed!"),
//     email: z.string().email().toLowerCase(),
//     password: z.string().min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
//     confirm_password: z.string().min(10),
//   })
//   .superRefine(async ({username}, ctx) => {
//     const user = await db.user.findUnique({
//       where: {
//         username,
//       },
//       select: {
//         id: true,
//       },
//     });
//     if (user) {
//       ctx.addIssue({
//         code: "custom",
//         message: "This username is already taken",
//         path: ["username"],
//         fatal: true,
//       });
//       return z.NEVER;
//     }
//   })
//   .superRefine(async ({email}, ctx) => {
//     const user = await db.user.findUnique({
//       where: {
//         email,
//       },
//       select: {
//         id: true,
//       },
//     });
//     if (user) {
//       ctx.addIssue({
//         code: "custom",
//         message: "This email is already taken",
//         path: ["email"],
//         fatal: true,
//       });
//       return z.NEVER;
//     }
//   })
//   .refine(checkPasswords, {
//     message: "Both passwords shoult be the same!",
//     path: ["confirm_password"],
//   });

// const SignIn = () => {
//   const {handleSubmit, dispatch, formState: {errors}} = useForm({

//   });

//   return (
//     <div className="flex flex-col gap-10 px-5 py-8">
//       <div className="flex flex-col gap-2 *:font-medium">
//         <h1 className="text-2xl">안녕하세요!</h1>
//         <h2 className="text-xl">Fill in the form below to join!</h2>
//       </div>
//       <form action={dispatch} className="flex flex-col gap-3">
//         <Input
//           name="username"
//           type="text"
//           placeholder="Username"
//           required
//           errors={[errors.username?.message ?? ""]}
//           minLength={3}
//           maxLength={10}
//         />
//         <Input
//           name="email"
//           type="email"
//           placeholder="Eamil"
//           required
//           errors={state?.fieldErrors.email}
//         />
//         <Input
//           name="password"
//           type="password"
//           placeholder="Password"
//           required
//           errors={state?.fieldErrors.password}
//           minLength={PASSWORD_MIN_LENGTH}
//         />
//         <Input
//           name="confirm_password"
//           type="password"
//           placeholder="Confirm Password"
//           required
//           minLength={4}
//           errors={state?.fieldErrors.confirm_password}
//         />
//         <Button text="Create account" />
//       </form>
//       <SocialLogin />
//     </div>
//   );
// };

// export default SignIn;
