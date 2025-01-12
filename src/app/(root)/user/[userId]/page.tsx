import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const Page = async () => {
  // Fetch the session server-side
  const session = await getServerSession(authOptions);

  // Extract user ID from the session
  const userId = session?.user?.id;

  return (
    <div>
      <h1>
        Welcome
        {userId ? ` ${session?.user?.name || "User"}` : ""}
      </h1>
      {userId && userId !== undefined ? (
        <div>
          <p>User ID: {session.user?.id as string}</p>
          <p>Name: {session?.user?.name}</p>
          <p>Email: {session?.user?.email}</p>
        </div>
      ) : (
        <p>Please log in to view your profile</p>
      )}
    </div>
  );
};

export default Page;
