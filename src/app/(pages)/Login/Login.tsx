import SignInWithGoogle from "@/components/SignInWithGoogle";
import SignInWithGitHub from "@/components/SignInWithGitHub";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg max-w-4xl w-full overflow-hidden dark:shadow-gray-800">
        {/* Left Section */}
        <div className="p-8 md:p-12 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="items-start">
            {/* Logo Section */}
            <div className="flex items-center justify-center">
              <Image
                height={100}
                width={100}
                src="/img/gdg_logo.png"
                alt="Google Developer Groups"
                className="flex justify-center"
              />
            </div>
            {/* Title */}
            <h2 className="text-xl text-center font-bold text-gray-800 dark:text-gray-200 mb-4 py-8 transition-colors duration-300">
              Glad to have you here again!
            </h2>
            {/* Login Form */}
            {/* 
            <form className="space-y-10">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-md font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-3 h-8 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 transition-colors duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-md font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="mt-1 block w-full px-3 h-8 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 transition-colors duration-300"
                />
              </div>
            </form> 
            */}
            {/* Log In Button */}
            <div className="mt-10">
              <Button className="w-full bg-[#3A5B22] hover:bg-[#4f7c2f] text-white py-2 px-4 rounded-lg dark:bg-green-700 dark:hover:bg-green-600 transition-colors duration-300">
                Log In
              </Button>
            </div>
            {/* Divider */}
            <div className="flex items-center justify-center pt-10 text-gray-700 dark:text-gray-300 transition-colors duration-300">
              <div className="flex items-center w-full">
                <div className="border-t border-gray-300 dark:border-gray-600 flex-grow"></div>
                <span className="px-4">or</span>
                <div className="border-t border-gray-300 dark:border-gray-600 flex-grow"></div>
              </div>
            </div>
            {/* Sign-In with Providers */}
            <div className="space-y-4 mt-10">
              {/* GitHub Login */}
              <SignInWithGitHub />
              {/* Google Login */}
              <SignInWithGoogle />
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="hidden md:block p-8 dark:bg-gray-700 transition-colors duration-300">
          <Image
            height={100}
            width={1000}
            src="/img/login.png"
            alt="Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;