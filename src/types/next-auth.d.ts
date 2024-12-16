import "next-auth"
import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id?: unknown
      username?: string
    } & DefaultSession["user"]
  }

  interface User {
    id: string
    username?: string
  }
}