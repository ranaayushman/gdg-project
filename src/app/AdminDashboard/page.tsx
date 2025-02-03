"use client";

import React from "react";
import dynamic from "next/dynamic";
// import AdminDashboard from './components/AdminDashboard';

const AdminDashboard = dynamic(() => import("./components/AdminDashboard"), {
  ssr: false,
});

export default function Page() {
  return <AdminDashboard />;
}

