import React from "react";
import AdminNavbar from "@/components/admin/AdminNavbar";
import Link from "next/link";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Page = async () => {
  // const session = await getServerSession(authOptions);
  // console.log(session?.user);
  return (
    <section className="flex flex-col items-center min-h-screen mx-auto relative overflow-x-hidden bg-blue-400 flex-1"></section>
  );
};

export default Page;
