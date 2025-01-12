import { User } from "@prisma/client";
import { Metadata } from "next";

export interface UserPageProps {
  params: Promise<{ username: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function UserPage({
  params,
  // searchParams,
}: UserPageProps) {
  // Await the params Promise
  const resolvedParams = await params;
  const { username } = resolvedParams;

  // Optional: Await searchParams if you need to use it
  // const resolvedSearchParams = await searchParams;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${username}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return (
      <div>
        <p>We couldn&apos;t find a user with the username: {username}</p>
      </div>
    );
  }

  const user = (await res.json()) as User;

  return (
    <div>
      <h1>Welcome, {user.username || "User"}!</h1>
      <p>Your User ID: {user.id}</p>
      <p>Email: {user.email || "Not available"}</p>
    </div>
  );
}

export async function generateMetadata({
  params,
}: UserPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { username } = resolvedParams;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${username}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return {
      title: "User Not Found",
    };
  }

  const user = (await res.json()) as User;

  return {
    title: `${user.username}'s Profile`,
  };
}
