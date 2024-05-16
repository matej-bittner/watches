import React from "react";
import ChooseCreate from "@/components/admin/products/ChooseCreate";
import { DataTable } from "@/components/admin/DataTable";
import { columns } from "@/app/(pages)/admin/products/columns";
import { GetAllProducts } from "@/app/api/get/route";

const ProductPage = async () => {
  const allProducts = await GetAllProducts();

  return (
    <section
      id="orders"
      className="flex-1 flex flex-col items-center gap-4 max-w-[100vw]"
    >
      <h2 className="text-xl">Produkty</h2>
      <div className="size-full overflow-auto flex flex-col gap-4 items-center ">
        <ChooseCreate />
        <DataTable columns={columns} data={allProducts} />
      </div>
    </section>
  );
};

export default ProductPage;
