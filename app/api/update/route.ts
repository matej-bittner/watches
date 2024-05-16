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

  const { actionType, id, data, editProduct } = allData;

  if (actionType === "updateOrder") {
    if (!id) {
      throw new Error();
    }
    await prisma.order.update({
      where: { id },
      data,
    });

    return NextResponse.json("order Updated");
  }

  if (actionType === "updateProduct") {
    if (!editProduct) {
      throw new Error();
    }

    // když puvodni data maji kolekci a nova data jsou "" tak odeber kolekci
    if (editProduct.collection && data.collection === "") {
      await prisma.variant.update({
        where: {
          id: editProduct.id,
        },
        data: {
          price: data.price,
          purchasePrice: data?.purchasePrice,
          stock: data.stock,
          material: data?.material,
          type: data?.type,
          hexColor: data?.hexColor,
          color: data?.color,
          collection: {
            disconnect: true,
          },
        },
      });

      return NextResponse.json("data měla kolekci, teď byla odebrána");
    }

    //najit kolekci do ktere chci nově přidat variantu
    const findCollection = await prisma.collection.findFirst({
      where: {
        title: data.collection,
        partsId: editProduct.partsId,
      },
    });

    //puvodne neni kolekce a nově má být
    if (editProduct.collection === null && data.collection !== "") {
      await prisma.variant.update({
        where: {
          id: editProduct.id,
        },
        data: {
          price: data.price,
          purchasePrice: data?.purchasePrice,
          stock: data.stock,
          material: data?.material,
          type: data?.type,
          hexColor: data?.hexColor,
          color: data?.color,
          collection: {
            connectOrCreate: {
              where: {
                id: editProduct.partsId,
              },
              create: {
                title: data.collection,
                parts: { connect: { id: editProduct.partsId } },
              },
            },
          },
        },
      });
      return NextResponse.json(
        "vytvořená nová kolekce a přidána do ní varianta/nebo přidáno do existující kolekce",
      );
    }

    // puvodne je kolekce a ma byt zmeneno do jiné
    if (editProduct.collection && data.collection !== "") {
      await prisma.variant.update({
        where: {
          id: editProduct.id,
        },
        data: {
          collection: {
            disconnect: true,
          },
        },
      });

      await prisma.variant.update({
        where: {
          id: editProduct.id,
        },
        data: {
          price: data.price,
          purchasePrice: data?.purchasePrice,
          stock: data.stock,
          material: data?.material,
          type: data?.type,
          hexColor: data?.hexColor,
          color: data?.color,
          collection: {
            connectOrCreate: {
              where: {
                id: findCollection?.id,
              },
              create: {
                title: data.collection,
                parts: {
                  connect: {
                    id: editProduct.partsId,
                  },
                },
              },
            },
          },
        },
      });

      return NextResponse.json(
        "změněno z existující do existující/nebo do nově vytvořeného",
      );
    }
  }

  return NextResponse.json("ok");
}

// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
//
// export async function PUT(request: any) {
//   const session = await getServerSession(authOptions);
//   if (!session) {
//     return NextResponse.json({ message: "Nejsi přihlášený" });
//   }
//   const allData = await request.json();
//
//   const { actionType, id, data, editProduct } = allData;
//
//   if (actionType === "updateOrder") {
//     if (!id) {
//       throw new Error();
//     }
//     await prisma.order.update({
//       where: { id },
//       data,
//     });
//
//     return NextResponse.json("order Updated");
//   }
//
//   if (actionType === "updateProduct") {
//     if (!editProduct) {
//       throw new Error();
//     }
//
//     // když puvodni data maji kolekci a nova data jsou "" tak odeber kolekci
//     if (editProduct.collection && data.collection === "") {
//       await prisma.variant.update({
//         where: {
//           id: editProduct.id,
//         },
//         data: {
//           price: data.price,
//           purchasePrice: data?.purchasePrice,
//           stock: data.stock,
//           material: data?.material,
//           type: data?.type,
//           hexColor: data?.hexColor,
//           color: data?.color,
//           collection: {
//             disconnect: true,
//           },
//         },
//       });
//
//       return NextResponse.json("data měla kolekci, teď byla odebrána");
//     }
//
//     //najit kolekci do ktere chci nově přidat variantu
//     const findCollection = await prisma.collection.findFirst({
//       where: {
//         title: data.collection,
//         partsId: editProduct.partsId,
//       },
//     });
//
//     //puvodne neni kolekce a nově má být
//     if (editProduct.collection === null && data.collection !== "") {
//       // kdyz neexistuje kolekce do které chci přidat
//       if (!findCollection) {
//         await prisma.variant.update({
//           where: {
//             id: editProduct.id,
//           },
//           data: {
//             price: data.price,
//             purchasePrice: data?.purchasePrice,
//             stock: data.stock,
//             material: data?.material,
//             type: data?.type,
//             hexColor: data?.hexColor,
//             color: data?.color,
//             collection: {
//               create: {
//                 title: data.collection,
//                 parts: {
//                   connect: {
//                     id: editProduct.partsId,
//                   },
//                 },
//               },
//             },
//           },
//         });
//         return NextResponse.json(
//           "vytvořená nová kolekce a přidána do ní varianta",
//         );
//       }
//       if (findCollection) {
//         await prisma.variant.update({
//           where: {
//             id: editProduct.id,
//           },
//           data: {
//             price: data.price,
//             purchasePrice: data?.purchasePrice,
//             stock: data.stock,
//             material: data?.material,
//             type: data?.type,
//             hexColor: data?.hexColor,
//             color: data?.color,
//             collection: {
//               connect: {
//                 id: findCollection.id,
//               },
//             },
//           },
//         });
//         return NextResponse.json(
//           "do již vytvořené kolekce a přidána do ní varianta",
//         );
//       }
//     }
//
//     // puvodne je kolekce a ma byt zmeneno do jiné
//     if (editProduct.collection && data.collection !== "") {
//       if (findCollection) {
//         await prisma.variant.update({
//           where: {
//             id: editProduct.id,
//           },
//           data: {
//             collection: {
//               disconnect: true,
//             },
//           },
//         });
//
//         await prisma.variant.update({
//           where: {
//             id: editProduct.id,
//           },
//           data: {
//             price: data.price,
//             purchasePrice: data?.purchasePrice,
//             stock: data.stock,
//             material: data?.material,
//             type: data?.type,
//             hexColor: data?.hexColor,
//             color: data?.color,
//             collection: {
//               connect: {
//                 id: findCollection.id,
//               },
//             },
//           },
//         });
//
//         return NextResponse.json("změněno z existující do existující");
//       }
//       if (!findCollection) {
//         await prisma.variant.update({
//           where: {
//             id: editProduct.id,
//           },
//           data: {
//             collection: {
//               disconnect: true,
//             },
//           },
//         });
//         await prisma.variant.update({
//           where: {
//             id: editProduct.id,
//           },
//           data: {
//             price: data.price,
//             purchasePrice: data?.purchasePrice,
//             stock: data.stock,
//             material: data?.material,
//             type: data?.type,
//             hexColor: data?.hexColor,
//             color: data?.color,
//             collection: {
//               create: {
//                 title: data.collection,
//                 parts: {
//                   connect: {
//                     id: editProduct.partsId,
//                   },
//                 },
//               },
//             },
//           },
//         });
//         return NextResponse.json("změněno z existující do nově vytvořené");
//       }
//     }
//   }
//
//   return NextResponse.json("ok");
// }
