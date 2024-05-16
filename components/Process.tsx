import React from "react";
import Image from "next/image";
import { RxDoubleArrowDown } from "react-icons/rx";
const Process = () => {
  return (
    <section className="max-w-[1400px] w-[94%] lg:w-[98%] mx-auto  flex flex-col gap-2">
      <h1 className="text-center">Jak to funguje</h1>
      <div
        id="process"
        className="grid sm:grid-cols-2 max-lg:gap-y-12 sm:gap-x-3 md:gap-x-6 lg:gap-x-4 text-white justify-items-center lg:items-end lg:grid-cols-3 pt-10"
      >
        <div className="process-box w-full sm:order-1">
          <>
            <div className="number">1</div>
            <RxDoubleArrowDown
              className="invert absolute bottom-[-15%] left-4 sm:hidden"
              size={60}
            />
            <Image
              src="/icons/process-lg-arrow.svg"
              alt="arrow"
              width={123}
              height={217}
              className="absolute hidden sm:block bottom-[-230px] left-10 lg:hidden"
            />
          </>
          <h2>Konfigurace</h2>
          <p>
            Vše začíná na stránce konfigurátoru, kde si vyberete vzhled hodinek.
            Od strojku, ciferníku, ručiček až po řemínek. Ihned při konfiguraci
            uvidíte, jak budou hodinky vypadat.
          </p>
        </div>
        <div className="process-box sm:order-3 lg:order-2  sm:col-span-2 lg:col-span-1 w-full sm:w-[50%] lg:w-full">
          <>
            <div className="number">2</div>
            <RxDoubleArrowDown
              className="invert absolute bottom-[-15%] left-4 sm:hidden"
              size={60}
            />
          </>
          <h2>Sestavení</h2>
          <p>
            Poté co obdržím objednávku, tak začnu hodinky sestavovat, obvykle
            sestavení netrvá déle, než 10 dní. (v případě, že nejsou komponenty
            skladem, může sestavení trvat déle – tato informace je uvedena při
            konfiguraci)
          </p>
        </div>
        <div className="process-box w-full sm:order-2 lg:order-3">
          <>
            <div className="number">3</div>
            <Image
              src="/icons/process-lg-arrow-reverse.svg"
              alt="arrow"
              width={123}
              height={217}
              className="absolute hidden sm:block bottom-[-230px] right-10 lg:hidden"
            />
          </>
          <h2>Přeprava</h2>
          <p>
            Poslední kroj je odeslání a balení. Při objednání je možné zvolit i
            dárkové balení, obvykle jsou hodinky doručeny za 2-3 pracovní dny na
            uvedenou adresu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
