import React from "react";
import Header from "@/components/Header";
import WatchSection from "@/components/WatchSection";
import About from "@/components/About";
import Process from "@/components/Process";

const Page = () => {
  return (
    <div
      id="homepage"
      className="flex h-full w-full flex-col gap-2 sm:gap-3 lg:gap-5 xl:gap-6"
    >
      <Header />
      <Process />
      <WatchSection />
      <About />
    </div>
  );
};

export default Page;
