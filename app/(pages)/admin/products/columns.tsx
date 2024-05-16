"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { AllProductsType } from "@/typings";

export const columns: ColumnDef<AllProductsType>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "parts.title",
    header: "Součást",
  },
  {
    accessorKey: "collection.title",
    header: "Kolekce",
  },
  {
    accessorKey: "color",
    header: "Barva",
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
    accessorKey: "stock",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0 m-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Sklad
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "edit",
    header: () => <span className="sr-only">Edit</span>,
    cell: ({ row }) => {
      const productId = row.original.id;
      return (
        <Link
          href={`/admin/products/${productId}`}
          className="text-nowrap text-blue-500 font-medium"
        >
          Zobraz<span className="max-sm:hidden">it</span>
        </Link>
      );
    },
  },
];
