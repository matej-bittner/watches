import React from "react";

import ProductForm from "@/components/admin/products/ProductForm";
import { GetCollectionsByPartId } from "@/app/api/get/route";
interface CreatePageParams {
  searchParams: {
    create: string;
  };
}
const CreatePage = async ({ searchParams }: CreatePageParams) => {
  const partCollections = await GetCollectionsByPartId(searchParams.create);

  return (
    <section
      id="create-product"
      className="flex-1 flex flex-col items-center gap-4 max-w-[100vw]"
    >
      <h2 className="text-xl">Vytvořit {searchParams.create}</h2>
      <ProductForm
        part={searchParams.create}
        partCollections={partCollections}
      />
    </section>
  );
};

export default CreatePage;
