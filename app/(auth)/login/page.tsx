"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import {URL} from "@/constants/constants";
import {zodResolver} from "@hookform/resolvers/zod";
import {signIn} from "next-auth/react";
import {redirect} from "next/navigation";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {authenticationSchema, AuthenticationType} from "./schema";

export default function LogIn() {
  const [error, setError] = useState(false);

  const {
    formState: {errors, isSubmitting},
    handleSubmit,
    register,
  } = useForm<AuthenticationType>({
    resolver: zodResolver(authenticationSchema),
  });

  const login = async (data: AuthenticationType) => {
    const authorization = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (!!authorization?.ok) {
      redirect(URL.MEMO);
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col gap-10 px-5 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        {error && <h2 className="text-xl">이메일과 비밀번호를 확인해주세요.</h2>}
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
        <Button text="Log in" disabled={isSubmitting} />
      </form>
      {/* <SocialLogin /> */}
    </div>
  );
}
