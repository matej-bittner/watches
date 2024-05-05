import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative  w-full">
      <Navbar />
      <div className="flex ">{children}</div>
      <Footer />
    </main>
  );
};

export default HomeLayout;
