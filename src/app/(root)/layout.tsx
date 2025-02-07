"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { SessionProvider } from "next-auth/react";
import Background from "@/components/ui/Background";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <div className="flex flex-col min-h-screen dark:bg-gray-950">
        <Navbar />
        {/* <Background /> */}
        
        <main className="flex-grow pt-16">{children}</main>
        
        <Footer />
      </div>
    </SessionProvider>
  );
}
