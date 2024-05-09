import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function GetOrder(id: string) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "Nejsi přihlášený" });
  }
  const order = await prisma.order.findUnique({
    where: {
      id: id,
    },
  });
  return order;
}

export async function GetAllOrders() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "Nejsi přihlášený" });
  }
  const orders = await prisma.order.findMany({
    select: {
      id: true,
      createdAt: true,
      note: true,
      price: true,
      status: true,
    },
  });

  return orders;
}
