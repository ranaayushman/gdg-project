import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,

      // Add these optional configurations
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      session.user.username = user.username || user.email?.split("@")[0];
      return session;
    },
  },

  // Add error handling
  events: {
    async signIn(message) {
      console.log("Sign in event", message);
    },
    async createUser(message) {
      console.log("User created", message);
    },
  },

  // Add more detailed error handling
  pages: {
    error: "/Login",
  },
});

export { handler as GET, handler as POST };
