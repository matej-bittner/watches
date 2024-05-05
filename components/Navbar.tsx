import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="absolute z-20 h-[150px] w-full  text-white sm:h-[180px] md:top-[14px] md:h-[65px]"
    >
      <div className="relative mx-auto flex h-full w-full max-w-[1500px] flex-col items-center justify-center">
        <Link
          href="/"
          className=" absolute right-5 hidden text-center  text-sm md:block"
        >
          Sledování <br /> Objednávky
        </Link>
        <div className="justify-items-center max-md:grid max-md:h-[105px] max-md:grid-cols-2 max-md:text-xl max-sm:gap-4  md:flex md:w-[530px] md:items-center md:justify-between md:text-center">
          <Link
            href=""
            className="text-4xl max-md:col-span-2 sm:text-5xl md:order-2 md:text-2xl"
          >
            PostavSiHodinky
          </Link>
          <Link
            className="text-xl max-md:pl-1 sm:text-[22px] md:order-1 md:w-[142px] md:text-2xl"
            href=""
          >
            Blog
          </Link>
          <Link
            className="text-xl max-md:pr-1 sm:text-[22px] md:order-3 md:w-[142px] md:text-2xl"
            href=""
          >
            Konfigurátor
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
