import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: any) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "Nejsi přihlášený" });
  }
  const allData = await request.json();

  const { data, part } = allData;

  if (
    part !== "dial" &&
    part !== "hands" &&
    part !== "bracelet" &&
    part !== "movement" &&
    part !== "case"
  )
    return NextResponse.json("součástka není v DB");

  // idd součástky obecně
  const findPartId = await prisma.parts.findFirst({
    where: { part },
    select: {
      id: true,
    },
  });

  if (!findPartId) {
    return NextResponse.json("součástka neexistuje");
  }

  // pokud neni zadana kolkce, pouze vytvořit variantu
  if (!data.collection) {
    // vytvoření varianty součástky - barva, cena, marže,..
    const createVariant = await prisma.variant.create({
      data: {
        price: data.price,
        purchasePrice: data?.purchasePrice,
        stock: data.stock,
        material: data?.material,
        type: data?.type,
        hexColor: data?.hexColor,
        color: data?.color,
        parts: { connect: { id: findPartId.id } },
      },
    });
  }

  if (data.collection) {
    const findCollection = await prisma.collection.findFirst({
      where: {
        title: data.collection,
        partsId: findPartId.id,
      },
    });

    if (findCollection) {
      const createVariantAndCollection = await prisma.variant.create({
        data: {
          price: data.price,
          purchasePrice: data?.purchasePrice,
          stock: data.stock,
          material: data?.material,
          type: data?.type,
          hexColor: data?.hexColor,
          color: data?.color,
          parts: { connect: { id: findPartId.id } },
          collection: { connect: { id: findCollection.id } },
        },
      });
    }

    if (!findCollection) {
      const createCollection = await prisma.collection.create({
        data: {
          title: data.collection,
          parts: { connect: { id: findPartId.id } },
          variant: {
            create: {
              price: data.price,
              purchasePrice: data?.purchasePrice,
              stock: data.stock,
              material: data?.material,
              type: data?.type,
              hexColor: data?.hexColor,
              color: data?.color,
              parts: { connect: { id: findPartId.id } },
            },
          },
        },
      });
    }
  }

  return NextResponse.json("ok");
}
