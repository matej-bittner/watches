import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "tomasnovak@gmail.com",
        },
        password: { placeholder: "Heslo", label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("vyplň všechna pole");
        }
        const admin = await prisma.admin.findUnique({
          where: { email: credentials.email },
        });

        if (!admin) {
          throw new Error("účet neexistuje");
        }

        const matchPw = await bcrypt.compare(
          credentials.password,
          admin.password,
        );

        if (!matchPw) {
          throw new Error("neplatné heslo");
        }

        return admin;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 2 * 60 * 60,
  },
};

const handler = NextAuth(authOptions);
//
export { handler as GET, handler as POST };
