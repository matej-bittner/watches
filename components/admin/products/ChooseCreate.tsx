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
        <Link className="" href="/admin/products/create?create=dial">
          Ciferník
        </Link>
        <Link href="/admin/products/create?create=case">Pouzdro</Link>
        <Link href="/admin/products/create?create=bracelet">Řemínek</Link>
        <Link href="/admin/products/create?create=hands">Ručičky</Link>
        <Link href="/admin/products/create?create=movement">Pohyb</Link>
      </div>
    </section>
  );
};

export default ChooseCreate;
