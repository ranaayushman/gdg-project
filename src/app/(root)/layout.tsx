<<<<<<< HEAD
'use client'
=======
"use client";
>>>>>>> 690bd9488f8895555b12073958e7146d9bc37361
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { SessionProvider } from "next-auth/react";
import Background from "@/components/ui/Background";
// import { Toaster } from "@/components/ui/toaster";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <div className="flex flex-col min-h-screen dark:bg-gray-950">
        <Navbar />
        <Background />
        
        <main className="flex-grow pt-16">{children}</main>
        {/* <Toaster /> */}
        <Footer />
      </div>
    </SessionProvider>
  );
}
