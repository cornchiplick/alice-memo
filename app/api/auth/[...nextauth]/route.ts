import db from "@/lib/db";
import {userSchema} from "@/types/user/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  // pages: {
  //   signIn: "/login",
  // signOut: "/auth/signout",
  // error: "/auth/error",
  // verifyRequest: "/auth/verify-request",
  // newUser: null,
  // },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "email"},
        password: {label: "Password", type: "password"},
        username: {label: "Username", type: "text"},
      },
      async authorize(credentials, req) {
        const result = await userSchema.safeParseAsync(credentials);

        if (!result.success) {
          return null;
        } else {
          const user = await db.user.findUnique({
            where: {
              email: result.data.email,
              // TODO password 는 추후에 암호화해서 비교식으로 따로 처리
              password: result.data.password,
            },
            select: {
              id: true,
              email: true,
              username: true,
            },
          });

          if (!user) {
            return null;
          } else {
            return {...user, id: user.id.toString()};
          }
        }
      },
    }),
  ],
});

export {handler as GET, handler as POST};
