"use client";

import React from "react";
import dynamic from "next/dynamic";
// import AdminDashboard from "../admin/components/AdminDashboard";
// import AdminDashboard from './components/AdminDashboard';

const AdminDashboard = dynamic(
  () => import("../admin/components/AdminDashboard"),
  {
    ssr: false,
  }
);

export default function Page() {
  return <AdminDashboard />;
}
