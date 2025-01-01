"use client";

import Input from "@/components/Input";
// import Button from "@/components/button";
// import Input from "@/components/input";
// import SocialLogin from "@/components/social-login";
// import {PASSWORD_MIN_LENGTH} from "@/lib/constants";
import {useForm} from "react-hook-form";
import {z} from "zod";
// import {login} from "./actions";

const registerSchema = z.object({
  email: z.string().trim().email().min(50),
  password: z.string().trim().min(10),
});

type RegisterType = z.infer<typeof registerSchema>;

export default function LogIn() {
  const {
    formState: {errors},
    handleSubmit,
    register,
  } = useForm<RegisterType>();

  const login = async (data: RegisterType) => {
    console.log("data : ", data);
  };

  return (
    <div className="flex flex-col gap-10 px-5 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form onSubmit={handleSubmit(login)} className="flex flex-col gap-3">
        <Input
          {...register("email", {required: true})}
          required
          name="email"
          type="email"
          placeholder="Email"
          errors={[errors.email?.message ?? ""]}
        />
        <Input
          {...register("password", {required: true})}
          required
          name="password"
          type="password"
          placeholder="Password"
          minLength={10}
          errors={[errors.password?.message ?? ""]}
        />
        <button>Log in</button>
        {/* <Button text="Log in" /> */}
      </form>
      {/* <SocialLogin /> */}
    </div>
  );
}
