import React, { ReactNode } from "react";

import AdminNavbar from "@/components/admin/AdminNavbar";
import { Toaster } from "@/components/ui/toaster";
import LogoutButton from "@/components/admin/LogoutButton";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative w-full min-h-screen flex max-w-[1280px] mx-auto">
      <AdminNavbar />
      <div className="flex flex-col flex-1 gap-2 xl:relative">
        <Toaster />
        <h1 className="text-2xl sm:text-4xl pt-2 text-center">Admin Panel</h1>
        <LogoutButton />
        <div className="flex-1 flex xl:px-2">{children}</div>
      </div>
    </main>
  );
};

export default AdminLayout;
