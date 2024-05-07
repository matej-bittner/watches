"use client";
import React, { useState } from "react";
import Link from "next/link";
import { dummyData } from "@/constants";

const OrdersPage = () => {
  const [search, setSearch] = useState("");
  return (
    <section
      id="orders"
      className="flex-1 flex flex-col items-center gap-4 max-w-[100vw]"
    >
      <h2 className="text-xl">Objednávky</h2>
      <input
        type="text"
        placeholder="hledej"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="w-full overflow-auto">
        <table
          id="orders-table"
          className="w-full text-sm text-left rtl:text-right "
        >
          <thead className="text-xs uppercase bg-light-gray ">
            <tr>
              <th scope="col">Objednávka</th>
              <th scope="col">Ze Dne</th>
              <th className="max-sm:hidden" scope="col">
                Cena
              </th>
              <th scope="col">Poznámka</th>
              <th scope="col">Stav</th>
              <th scope="col">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {dummyData
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.state.toLowerCase().includes(search);
              })
              .map((item, i) => (
                <tr key={i} className="border-b ">
                  <th scope="row" className="font-medium whitespace-nowrap">
                    {item.id}
                  </th>
                  <td>22.1.2024</td>
                  <td className="max-sm:hidden">{item.price}</td>
                  <td className="max-h-[90px] md:max-h-[60px]  block overflow-auto">
                    {item.note}
                  </td>
                  <td>{item.state}</td>
                  <td className="text-right">
                    <Link
                      href="#"
                      className="font-medium text-blue-600  hover:underline"
                    >
                      Zobraz<span className="max-sm:hidden">it</span>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrdersPage;
