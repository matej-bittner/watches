"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import Toast from "@/components/Toast";

type Inputs = {
  email: string;
};
const FooterForm = () => {
  const toastRef = useRef<any>(null);
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    if (toastRef.current) {
      toastRef.current.show();
    }
    reset();
  };

  return (
    <>
      <Toast ref={toastRef} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-[30px] md:h-[40px] w-fit gap-2 rounded-md bg-white px-2 ring-1 ring-black"
      >
        <input
          type="email"
          className="h-full w-[140px]  md:w-[180px] bg-white text-sm italic placeholder-black outline-none text-black"
          placeholder="e-mail"
          {...register("email")}
        />
        <button type="submit">
          <Image src="/icons/submit.svg" width={15} height={17} alt="email" />
        </button>
      </form>
    </>
  );
};

export default FooterForm;
