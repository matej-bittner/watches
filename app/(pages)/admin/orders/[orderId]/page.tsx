import React, { Suspense } from "react";

import { GetOrder } from "@/app/api/get/route";
import DeliveryForm from "@/components/admin/order-info/DeliveryForm";
import { OrderTable } from "@/components/admin/order-info/OrderTable";
import ChangeStatus from "@/components/admin/order-info/ChangeStatus";

const Page = async ({ params }: { params: { orderId: string } }) => {
  const orderData = await GetOrder(params.orderId);
  const orderDataObj = Object(orderData);
  const order = orderDataObj.order;
  const parts = orderDataObj.orderedParts;

  return (
    <section
      id="order-id"
      className="flex-1 flex flex-col items-center gap-6 max-w-[100vw] "
    >
      <h2 className="text-xl">Objednávka</h2>
      <Suspense
        fallback={<div className="absolute w-screen h-screen bg-red-300"></div>}
      >
        <div className="w-full flex-1 px-2 gap-4 flex flex-col">
          <div className="flex max-lg:flex-col gap-4 lg:items-center">
            <DeliveryForm order={order} />
            <div className="flex flex-col items-center gap-2 text-center lg:w-1/2">
              <div className="flex max-md:flex-col md:gap-4">
                <p className="font-medium">Email:</p>
                <p>{order?.phoneNumber}</p>
              </div>
              <div className="flex max-md:flex-col md:gap-4">
                <p className="font-medium">Telefon:</p>
                <p>{order?.email}</p>
              </div>
              {order.note && (
                <div className="flex flex-col">
                  <p className="font-medium">Poznámka:</p>
                  <p>{order?.note}</p>
                </div>
              )}
            </div>
          </div>
          <OrderTable parts={parts} />
          <ChangeStatus currentStatus={order.status} orderId={order.id} />
        </div>
      </Suspense>
    </section>
  );
};

export default Page;
