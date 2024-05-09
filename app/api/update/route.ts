import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function PUT(request: any) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "Nejsi přihlášený" });
  }
  const allData = await request.json();

  const { actionType, id, data } = allData;

  if (!id) {
    throw new Error();
  }

  if (actionType === "updateOrder") {
    await prisma.order.update({
      where: { id },
      data,
    });

    return NextResponse.json("order Updated");
  }

  return NextResponse.json("ok");
}
