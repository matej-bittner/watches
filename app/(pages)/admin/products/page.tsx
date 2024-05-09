import React from "react";
import ChooseCreate from "@/components/admin/products/ChooseCreate";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    stock: 316,
    collection: "letní",
    color: "modrá",
    price: 652,
  },
  {
    id: "3u1reuv4",
    stock: 242,
    collection: "zimní",
    color: "žlutá",
    price: 652,
  },
  {
    id: "derv1ws0",
    stock: 837,
    collection: "limitovaná",
    color: "červená",
    price: 652,
  },
  {
    id: "5kma53ae",
    stock: 874,
    collection: "jarní",
    color: "bílá",
    price: 652,
  },
  {
    id: "bhqecj4p",
    stock: 721,
    collection: "letní",
    color: "fialová",
    price: 652,
  },
];
export type Payment = {
  id: string;
  stock: number;
  collection: string | null;
  color: string;
  price: number;
};
const ProductPage = () => {
  return (
    <section
      id="orders"
      className="flex-1 flex flex-col items-center gap-4 max-w-[100vw]"
    >
      <h2 className="text-xl">Produkty</h2>

      <div className="size-full overflow-auto flex flex-col gap-4 items-center ">
        <ChooseCreate />
      </div>
    </section>
  );
};

export default ProductPage;
