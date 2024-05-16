import React from "react";
import Image from "next/image";
import Link from "next/link";

const WatchSection = () => {
  return (
    <section className="relative mx-auto flex h-[320px] w-full max-w-[1400px] bg-opacity-20 bg-[url('/images/watch-section-bg.png')] bg-cover  bg-center bg-no-repeat text-white sm:h-[350px] sm:justify-end xl:h-[450px] xl:rounded-md my-5 sm:mt-6 lg:my-0">
      <Image
        src="/images/watch-section-new.png"
        className="absolute left-[-60px] top-[-15px] h-[386px] w-[200px] min-[450px]:left-[-20px] min-[530px]:left-[10px]  sm:left-[60px] sm:top-[-20px] sm:h-[425px] sm:w-[220px] lg:left-[80px] lg:top-[-60px] lg:h-[482px] lg:w-[250px] lg:rotate-[50deg] xl:left-[170px] xl:h-[580px] xl:w-[300px]"
        alt="watch"
        width={429}
        height={826}
      />
      <div className="ml-[120px] flex h-full max-w-[350px] flex-col px-2 max-md:pt-6 min-[450px]:ml-[160px] min-[530px]:ml-[200px] sm:ml-0 sm:min-w-[calc(100%-280px)] md:items-center lg:min-w-[calc(100%-400px)] ">
        <div className="md:h-full md:w-[460px] md:py-6 ">
          <h1 className="pb-[40px] md:pb-[60px] xl:pb-[80px] ">
            Kofigurace Hodinek
          </h1>
          <div className="flex flex-col items-center gap-[40px] px-2 text-center md:gap-[60px] xl:gap-[80px]">
            <p className="sm:text-lg md:max-w-[400px] xl:text-xl">
              V konfigurátoru si můžete vyzkoušet, jak by vVaše hodinky měly
              vypadat. Pokud se Vám budou líbit, můžete si je rovnou objednat
            </p>
            <Link
              href="/configure-watch"
              className="rounded-md bg-[#AA7A41] p-2 text-lg lg:rounded-lg lg:px-4 lg:py-3 lg:text-xl"
            >
              Konfigurovat
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchSection;
