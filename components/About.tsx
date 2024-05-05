import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-2 mx-auto ">
      <h1 className="text-center">O Mně</h1>
      <article className="flex flex-col gap-4 max-w-[700px] px-2 sm:text-lg sm:text-center">
        <p>
          Již od [Váš věk] let mě fascinuje umění a řemeslo výroby hodinek.
          Strávím hodiny laděním každého detailu, od výběru kvalitních materiálů
          až po precizní montáž strojků. Mým cílem je, aby každý kus, který
          opustí můj byt, byl nejen krásným doplňkem, ale i spolehlivým a
          přesným časoměřičem, který bude sloužit po generace.
        </p>
        <p>
          V mém projektu si klienti mohou navrhnout vlastní hodinky podle svých
          představ. Nabízím širokou škálu ciferníků, ručiček, pouzder a řemínků,
          takže si každý může vytvořit jedinečný kus, který odráží jeho osobní
          styl. Velmi rád s vámi zkonzultuji vaše nápady a pomohu vám vybrat ty
          nejlepší komponenty pro vaše vysněné hodinky.
        </p>
        <p>
          Všechny mé hodinky jsou vyrobeny z kvalitních materiálů, jako je
          nerezová ocel, kůže a safírové sklo. Používám pouze spolehlivé strojky
          od renomovaných výrobců, abych zajistil maximální přesnost a odolnost.
        </p>
        <p>
          Každý kus je ručně vyrobený s láskou a péčí a jsem si jistý, že s mými
          hodinkami budete spokojeni. Pokud hledáte jedinečné a kvalitní
          hodinky, které vám vydrží celý život, neváhejte mě kontaktovat.
        </p>
      </article>
    </div>
  );
};

export default About;
