"use client";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const AdminNavbar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="xl:border-r-2 border-black">
      <GiHamburgerMenu
        onClick={() => setOpenNav(!openNav)}
        size={40}
        className="absolute cursor-pointer left-2 top-2 z-30 xl:hidden"
      />
      <div
        className={`absolute  xl:sticky xl:w-[300px] xl:h-[100vh] xl:top-0 w-screen h-screen flex justify-around transition-all duration-300 max-xl:bg-light-gray z-20 ${openNav ? "max-xl:translate-x-0" : "max-xl:-translate-x-full"}`}
      >
        <div
          onClick={() => setOpenNav(!openNav)}
          className="flex-col flex xl:flex-col-reverse  py-20 xl:max-h-[600px] justify-around text-2xl font-semibold"
        >
          <div className="flex flex-col gap-4 items-center ">
            <Link href="/admin/orders">Objednávky</Link>
            <Link href="/admin/products">Produkty</Link>
            <Link href="/">Prodeje</Link>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Link href="/">Nastavení</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
