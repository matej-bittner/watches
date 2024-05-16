import React from "react";

import { DataTable } from "@/components/admin/DataTable";
import { columns } from "@/app/(pages)/admin/orders/columns";
import { GetAllOrders } from "@/app/api/get/route";

const OrdersPage = async () => {
  const orders: any = await GetAllOrders();
  // console.log(orders);
  return (
    <section
      id="orders"
      className="flex-1 flex flex-col items-center gap-4 max-w-[100vw]"
    >
      <h2 className="text-xl">Objednávky</h2>

      <div className="w-full overflow-auto">
        {/*//@ts-ignore*/}
        <DataTable columns={columns} data={orders} />
      </div>
    </section>
  );
};

export default OrdersPage;
