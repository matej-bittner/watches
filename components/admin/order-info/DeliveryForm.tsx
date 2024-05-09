"use client";
import React, { useEffect, useState } from "react";
import EditButton from "@/components/admin/order-info/EditButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

const schema = z.object({
  name: z.string().min(2, { message: "alespoň 2 písmena" }),
  surname: z.string().min(2, { message: "2 písmena" }),
  phoneNumber: z.number().min(6, { message: "alespoň 6 čísel" }),
  email: z.string().email().min(3, { message: "alespoň 2 písmena" }),
  city: z.string().min(1, { message: "alespoň 2 písmena" }),
  zipCode: z.number(),
  street: z.string().nullish(),
  houseNumber: z.string().min(1, { message: "alespoň 2 písmena" }),
});

type FormInputs = z.infer<typeof schema>;

const DeliveryForm = ({ order }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, disabled },
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
    // https://react-hook-form.com/docs/useform#defaultValues
    defaultValues: {
      name: order.name,
      surname: order.surname,
      phoneNumber: order.phoneNumber,
      email: order.email,
      city: order.city,
      zipCode: order.zipCode,
      street: order?.street,
      houseNumber: order.houseNumber,
    },
  });
  const { toast } = useToast();
  const router = useRouter();
  const [editable, setEditable] = useState(false);
  useEffect(() => {
    if (
      errors.name ||
      errors.surname ||
      errors.street ||
      errors.zipCode ||
      errors.houseNumber ||
      errors.email ||
      errors.phoneNumber ||
      errors.city
    ) {
      setEditable(true);
    }
  }, [errors]);
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      let id = order.id;
      let actionType = "updateOrder";
      let updateData = Object.assign({}, { data }, { id }, { actionType });
      await axios.put("/api/update", updateData);
      // router.refresh();
      toast({
        title: "Obědnávka byla změněna",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      id="personal-info"
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col gap-2 w-fit mx-auto ${editable && "bg-red-300"}`}
    >
      <div className="flex  justify-between items-center">
        <h3>Osobní údaje</h3>
        <EditButton
          editable={editable}
          setEditable={setEditable}
          alertText="osobní údaje"
        />
      </div>
      <div className="flex flex-col items-center text-sm gap-2">
        <div className="flex justify-between w-full gap-2">
          <div className="error-div">
            <input
              type="text"
              placeholder="Jméno"
              className="w-[160px]"
              {...register("name")}
              disabled={!editable}
            />
            {errors && <span>{errors.name?.message}</span>}
          </div>
          <div className="error-div items-end">
            <input
              type="text"
              placeholder="Příjmení"
              className="w-[160px]"
              {...register("surname")}
              disabled={!editable}
            />
            {errors && <span>{errors.surname?.message}</span>}
          </div>
        </div>
        <div className="self-start flex flex-col gap-2">
          <div className="error-div ">
            <input
              type="number"
              placeholder="Telefonní číslo"
              {...register("phoneNumber", { valueAsNumber: true })}
              disabled={!editable}
            />
            {errors && <span>{errors.phoneNumber?.message}</span>}
          </div>
          <div className="error-div ">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              disabled={!editable}
            />
            {errors && <span>{errors.email?.message}</span>}
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="error-div ">
            <input
              type="text"
              placeholder="Město"
              {...register("city")}
              disabled={!editable}
            />
            {errors && <span>{errors.city?.message}</span>}
          </div>
          <div className="error-div items-end">
            <input
              type="number"
              placeholder="Směrovací číslo"
              {...register("zipCode", { valueAsNumber: true })}
              disabled={!editable}
              className="w-[80px]"
            />
            {errors && <span>{errors.zipCode?.message}</span>}
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="error-div">
            <input
              type="text"
              placeholder="Ulice"
              {...register("street")}
              disabled={!editable}
            />
            {errors && <span>{errors.street?.message}</span>}
          </div>
          <div className="error-div items-end">
            <input
              type="text"
              placeholder="Číslo domu"
              {...register("houseNumber")}
              disabled={!editable}
              className="w-[80px]"
            />
            {errors && <span>{errors.houseNumber?.message}</span>}
          </div>
        </div>
      </div>
    </form>
  );
};

export default DeliveryForm;
