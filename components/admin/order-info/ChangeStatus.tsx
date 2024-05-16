"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

const statusTypes = [
  "přijatá",
  "ve zpracování",
  "zpracovaná",
  "odeslaná",
  "doručená",
];

type Inputs = {
  status: string;
};
const ChangeStatus = ({ currentStatus, orderId }: any) => {
  const { toast } = useToast();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      let actionType = "updateOrder";
      const allData = Object.assign(
        {},
        { actionType },
        { data },
        { id: orderId },
      );
      await axios.put("/api/update", allData);

      toast({
        title: "Status byl změněn",
      });
    } catch (error) {}
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-2 w-fit mx-auto"
    >
      <p>Změnit stav objednávky</p>
      <div className="flex gap-2">
        <select
          id="status"
          defaultValue={currentStatus}
          {...register("status")}
        >
          {statusTypes.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <button className="admin-base-btn" type="submit">
          Změnit stav
        </button>
      </div>
    </form>
  );
};

export default ChangeStatus;
