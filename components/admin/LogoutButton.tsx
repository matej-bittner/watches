"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const click = () => {
    signOut({ redirect: false }).then(() => {
      router.push("/");
    });
    router.refresh();
  };
  return (
    <button
      className="bg-red-300 text-white top-4 rounded-lg px-2 py-1 absolute right-2 md:text-lg"
      onClick={click}
    >
      Odhlásit
    </button>
  );
};

export default LogoutButton;
