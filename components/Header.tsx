import React from "react";

const Header = () => {
  return (
    <section className="z-10 flex h-[330px] w-full flex-col items-center justify-center gap-4 bg-[url('/images/header-bg.png')] bg-cover bg-center bg-no-repeat md:h-[300px] lg:h-[270px]">
      <article className="w-[80%] max-w-[580px] pt-[100px] text-center text-sm text-white sm:pt-[150px] md:hidden">
        <p>
          Jmenuji se [Vaše jméno] a jsem nadšenec do hodinek z [Vaše město],
          Česká republika. V mém bytě s láskou ručně skládám jedinečné hodinky
          na míru podle požadavků mých zákazníků.
        </p>
      </article>
    </section>
  );
};

export default Header;
