import React, { Suspense } from "react";

import { GetCollectionsByPartId, GetProduct } from "@/app/api/get/route";
import { prisma } from "@/lib/prisma";
import ProductForm from "@/components/admin/products/ProductForm";

const Page = async ({ params }: { params: { productId: string } }) => {
  const product = await GetProduct(params.productId);
  const collections = await prisma.collection.findMany({
    where: {
      partsId: product?.partsId,
    },
  });

  return (
    <section
      id="product-id"
      className="flex-1 flex flex-col items-center gap-6 max-w-[100vw] "
    >
      <h2 className="text-xl">Produkt</h2>
      <div className="w-full flex-1 px-2">
        <ProductForm partCollections={collections} editProduct={product} />
      </div>
    </section>
  );
};

export default Page;
