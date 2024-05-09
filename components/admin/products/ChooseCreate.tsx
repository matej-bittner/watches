import React from "react";
import Link from "next/link";

const ChooseCreate = () => {
  return (
    <section
      id="choose-create"
      className="w-full flex flex-col gap-2 items-center justify-center"
    >
      <h4>Vytvořit:</h4>
      <div className="flex gap-4 font-medium ">
        <Link className="" href="/dial">
          Ciferník
        </Link>
        <Link href="/case">Pouzdro</Link>
        <Link href="/hands">Ciferník</Link>
      </div>
    </section>
  );
};

export default ChooseCreate;
