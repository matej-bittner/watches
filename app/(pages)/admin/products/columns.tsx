"use client";
import { Payment } from "@/app/(pages)/admin/products/page";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "collection",
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
      return (
        <Link
          href={`/admin/`}
          className="text-nowrap text-blue-500 font-medium"
        >
          Zobraz<span className="max-sm:hidden">it</span>
        </Link>
      );
    },
  },
];
