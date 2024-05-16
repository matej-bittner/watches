"use client";
import React, { useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";

const schema = z.object({
  stock: z.union([
    z
      .number()
      .int()
      .positive({ message: "sklad musí být kladný" })
      .min(1, { message: "sklad musí být alespoň 1" }),
    z.nan(),
  ]),
  price: z.union([
    z
      .number()
      .int()
      .positive({ message: "cena musí být kladná" })
      .min(1, { message: "cena musí být zadána" }),
    z.nan(),
  ]),
  purchasePrice: z.union([z.number().int().positive(), z.nan()]).optional(),
  color: z.string().min(1, { message: "barva musí být vyplněna" }),
  hexColor: z.string(),
  collection: z.string().optional(),
  material: z.string().optional(),
  type: z.string().optional(),
});

type FormInputs = z.infer<typeof schema>;

interface CreateFormProps {
  part?: string;
  partCollections:
    | NextResponse<{ message: string }>
    | { title: string }[]
    | null;
  editProduct?: any;
}
const ProductForm = ({
  part,
  partCollections,
  editProduct,
}: CreateFormProps) => {
  const collectionsDb = Object(partCollections);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      stock: editProduct?.stock,
      price: editProduct?.price,
      purchasePrice: editProduct?.purchasePrice,
      color: editProduct?.color,
      hexColor: editProduct?.hexColor || "#",
      collection: editProduct?.collection?.title,
      material: editProduct?.material,
      type: editProduct?.type,
    },
  });
  const { toast } = useToast();
  const onSubmit: SubmitHandler<FormInputs> = async (formData) => {
    try {
      if (!editProduct) {
        let data = Object.fromEntries(
          Object.entries(formData).filter(
            ([_, v]) => v != "" && v != "#" && v != undefined && v,
          ),
        );
        const finalData = Object.assign({}, { data }, { part });
        await axios.post("/api/create", finalData);
        router.push("/admin/products");
        router.refresh();
        toast({
          title: "Produkt vytvořen",
        });
        reset();
      } else if (editProduct) {
        let data = Object.fromEntries(
          Object.entries(formData).filter(([_, v]) => v != "#"),
        );
        let actionType = "updateProduct";
        const updateData = Object.assign(
          {},
          { data },
          { editProduct },
          { actionType },
        );
        await axios.put("/api/update", updateData);

        router.push("/admin/products");
        router.refresh();
        toast({
          title: "Změna proběhla v pořádku",
        });
      }
    } catch (error) {}
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full overflow-auto px-2 max-w-[780px] gap-4 flex flex-col items-center"
    >
      <div className="w-full gap-2 flex flex-col">
        {/*prvni radek*/}
        <div className="flex max-sm:flex-col justify-between">
          {/*div pro error*/}
          <div className="flex flex-col gap-1">
            {/*input+input name */}
            <div className="flex flex-col">
              <p className="input-name">Sklad</p>
              <input
                type="number"
                {...register("stock", { valueAsNumber: true })}
              />
            </div>
            {errors && <span>{errors.stock?.message}</span>}
          </div>
          {/*div pro error*/}
          <div className="flex flex-col gap-1">
            {/*input+input name */}
            <div className="flex flex-col">
              <p className="input-name">Cena</p>
              <input
                type="number"
                {...register("price", { valueAsNumber: true })}
              />
            </div>
            {errors && <span>{errors.price?.message}</span>}
          </div>
          {/*input+input name */}
          <div className="flex flex-col">
            <p className="input-name">Nákupní Cena*</p>
            <input
              type="number"
              {...register("purchasePrice", { valueAsNumber: true })}
            />
          </div>
        </div>
        {/*druhy radek*/}
        <div className="flex max-sm:flex-col sm:max-w-[66%] justify-around sm:mx-auto sm:gap-5">
          {/*div pro error*/}
          <div className="flex flex-col gap-1">
            {/*input+input name */}
            <div className="flex flex-col">
              <p className="input-name">Barva</p>
              <input type="text" {...register("color")} />
            </div>
            {errors && <span>{errors.color?.message}</span>}
          </div>
          {/*input+input name */}
          <div className="flex flex-col">
            <p className="input-name">Barva Hex*</p>
            <input type="text" {...register("hexColor")} />
          </div>
        </div>
        {/*treti radek*/}
        <div className="flex max-sm:flex-col justify-between">
          {/*input+input name */}
          <div className="flex flex-col">
            <p className="input-name">Kolekce*</p>
            <input type="text" list="collections" {...register("collection")} />
            <datalist id="collections">
              {collectionsDb.map((item: any, i: number) => (
                <option key={i}>{item.title}</option>
              ))}
            </datalist>
          </div>
          {/*input+input name */}
          <div className="flex flex-col">
            <p className="input-name">Materiál*</p>
            <input type="text" {...register("material")} />
          </div>
          {/*input+input name */}
          <div className="flex flex-col">
            <p className="input-name">Typ*</p>
            <input type="text" {...register("type")} />
          </div>
        </div>
      </div>
      <button className="admin-base-btn ">
        {!editProduct ? "Vytvořit" : "Editovat"}
      </button>
    </form>
  );
};

export default ProductForm;
