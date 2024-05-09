"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Order = {
  id: number;
  createdAt: string;
  note: number;
  price: number;
  status: "odeslaná" | "ve zpracování" | "přijatá" | "stornovaná";
};

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "Objednávka",
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0 m-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Vytvořeno
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      const formatted = date.toLocaleDateString("cs-CZ");

      return <p className="">{formatted}</p>;
    },
  },
  {
    accessorKey: "note",
    header: "Poznámka",
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0 m-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cena
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Stav",
    cell: ({ row }) => {
      const status = row.original.status;
      // console.log(row.original.status);
      return (
        <p
          className={`${status === "stornovaná" && "text-red-500 font-medium"}`}
        >
          {status}
        </p>
      );
    },
  },
  {
    accessorKey: "edit",
    header: () => <span className="sr-only">Edit</span>,
    cell: ({ row }) => {
      const orderId = row.original.id;
      return (
        <Link
          href={`/admin/orders/${orderId}`}
          className="text-nowrap text-blue-500 font-medium"
        >
          Zobraz<span className="max-sm:hidden">it</span>
        </Link>
      );
    },
  },
];
