import React, { Suspense } from "react";

import { GetOrder } from "@/app/api/get/route";
import DeliveryForm from "@/components/admin/order-info/DeliveryForm";

const Page = async ({ params }: { params: { orderId: string } }) => {
  const order = await GetOrder(params.orderId);

  return (
    <section
      id="order-id"
      className="flex-1 flex flex-col items-center gap-6 max-w-[100vw] "
    >
      <h2 className="text-xl">Objednávka</h2>
      <Suspense
        fallback={<div className="absolute w-screen h-screen bg-red-300"></div>}
      >
        <div className="w-full flex-1 px-2">
          <DeliveryForm order={order} />
          <div className=""></div>
          <div className=""></div>
        </div>
      </Suspense>
    </section>
  );
};

export default Page;
