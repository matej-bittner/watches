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
    include: {
      orderedParts: true,
    },
  });

  if (!order) {
    return NextResponse.json("něco se nepovedlo");
  }

  const objectOrder = Object(order);
  const oP = objectOrder?.orderedParts;

  const variantSearchKeys = [
    // List of all possible ID properties

    "caseId",
    "dialId",
    "handsId",
    "braceletId",
    "movementId",
  ];

  const variantIds = oP
    .flatMap(
      (part: any) => variantSearchKeys.map((key) => part[key]), // Extract potential IDs from each part
    )
    .filter((id: string) => id !== undefined); // Remove undefined values

  const variants = await prisma.variant.findMany({
    where: {
      OR: variantIds.map((id: string) => ({ id })), // Construct OR conditions for each ID
    },
    include: {
      parts: {
        select: { title: true },
      },
      collection: {
        select: { title: true },
      },
    },
  });

  if (objectOrder.orderedParts) {
    delete objectOrder.orderedParts;
    const finalData = Object.assign(
      {},
      { orderedParts: variants },
      { order: objectOrder },
    );
    return finalData;
  }

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

export async function GetCollectionsByPartId(part: string) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "Nejsi přihlášený" });
  }
  const partId = await prisma.parts.findFirst({
    where: {
      part,
    },
  });

  if (!partId) {
    return null;
  }

  const collections = await prisma.collection.findMany({
    where: {
      partsId: partId.id,
    },
  });

  return collections;
}

export async function GetAllProducts() {
  const allParts = await prisma.variant.findMany({
    select: {
      id: true,
      color: true,
      price: true,
      stock: true,
      parts: {
        select: {
          title: true,
        },
      },
      collection: {
        select: { title: true },
      },
    },
  });

  return allParts;
}

export async function GetProduct(id: string) {
  const product = await prisma.variant.findUnique({
    where: {
      id,
    },
    include: {
      parts: true,
      collection: true,
    },
  });

  return product;
}
