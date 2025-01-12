"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

const SignInWithGitHub: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      await signIn("github", { callbackUrl: "/" });
    } catch (error) {
      console.error("Error during sign-in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleSignIn}
      disabled={isLoading}
      className="flex items-center justify-center w-full border border-gray-300 hover:bg-gray-100 dark:border-gray-600 py-2 px-4 rounded-lg mt-4 bg-white dark:bg-gray-700 text-black dark:text-white transition-colors duration-300"
    >
      {isLoading ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 mr-2 animate-spin"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      ) : (
        <Image
          height={100}
          width={100}
          src="/svg/github.svg"
          alt="GitHub"
          className="h-5 w-5 mr-2 bg-white dark:bg-transparent"
        />
      )}
      {isLoading ? "Signing in..." : "Sign in with GitHub"}
    </button>
  );
};

export default SignInWithGitHub;
