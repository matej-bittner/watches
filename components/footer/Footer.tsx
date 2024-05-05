import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";
import FooterForm from "@/components/footer/FooterForm";
const Footer = () => {
  return (
    <footer className="relative flex h-[360px]  w-full flex-col bg-main-brown bg-cover bg-center items-center bg-no-repeat lg:h-[400px] mt-[43px] sm:mt-[47px] lg:mt-[55px] xl:mt-[59pxpx]">
      {/*newsletter*/}
      <div className="text-white absolute rounded-md max-w-[900px] -top-[35px] my-auto h-[70px]  w-[90%] bg-main-dark-gray  flex items-center justify-center sm:justify-around max-sm:flex-col gap-1">
        <p className="md:hidden">Přihlašte se k odběru novinek</p>
        <p className="hidden md:flex items-center gap-2 lg:text-lg">
          Nezmeškej žádné novinky a přihlaš se k odběru{" "}
          <MdOutlineMail size={30} />
        </p>
        <FooterForm />
      </div>
      <div className="flex h-full  flex-col items-center justify-between px-2 py-4 text-center pt-10 lg:pt-14 relative">
        <div className="">
          <h1>PostavSiHodinky</h1>
          <p className="text-sm ">postavsihodinky@info.cz</p>
        </div>
        <p className="max-w-[500px] ">
          Pokud máte dotazy, neváhejte se obrátit na výše uvedený e-mail. To
          stejné platí v případě speciálních požadavků nebo námětů na zlepšení
          služby.
        </p>
        {/*socials*/}
        <div className="flex  gap-[30px]  ">
          <Link href="">
            <Image
              src="/icons/facebook.svg"
              className="aspect-square lg:w-[60px] xl:w-[65px] "
              width={50}
              height={50}
              alt="facebook"
            />
          </Link>
          <Link href="">
            <Image
              src="/icons/instagram.svg"
              className="aspect-square lg:w-[60px] xl:w-[65px] "
              width={50}
              height={50}
              alt="instagram"
            />
          </Link>
          <Link href="">
            <Image
              src="/icons/twitter.svg"
              className="aspect-square lg:w-[60px] xl:w-[65px] "
              width={50}
              height={50}
              alt="twitter"
            />
          </Link>
        </div>
      </div>
      <div className="flex h-[60px] items-center justify-center bg-black text-center w-full">
        <p className="text-xl text-white">Copyright & 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
