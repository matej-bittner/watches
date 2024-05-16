"use client";
import React, { useEffect, useState } from "react";
import ChooseBox from "@/components/configurator/ChooseBox";
import PriceBox from "@/components/configurator/PriceBox";
import WatchConfigureImage from "@/components/configurator/WatchConfigureImage";
import InStock from "@/components/configurator/InStock";
import { bracelet, dial, hands, movement, watchCase } from "@/constants";

const Page = () => {
  const [openPreview, setOpenPreview] = useState(false);
  const [configureVariant, setConfigureVariant] = useState({});
  useEffect(() => {
    console.log(configureVariant);
  }, [configureVariant]);
  return (
    <section
      id="configure"
      className="bg-dark-gray w-full flex flex-col justify-center pt-[150px] pb-6 "
    >
      {/*config wrapper*/}
      <div className="w-[95%] bg-light-gray rounded-lg flex items-start mx-auto relative py-[20px] sm:p-[15px] max-w-[1300px]">
        {/*hodinky wrapper*/}
        <div
          className={`max-md:absolute  max-sm:top-[150px] sm:w-1/2 lg:w-[40%] max-sm:aspect-[7/8] w-[90%] min-[425px]:w-[400px] sm:h-[425px] md:flex md:flex-col md:h-full md:gap-4 ${openPreview ? "max-sm:-translate-x-[5%]" : "max-sm:-translate-x-[95%]"}`}
        >
          {/*hodinky*/}
          <WatchConfigureImage
            setOpenPreview={setOpenPreview}
            openPreview={openPreview}
          />
          <div className="hidden md:block xl:hidden">
            <InStock />
          </div>
        </div>
        {/*až bude lg - nastavit šířku na cca 2/3 - a zarovnat do prava v levo budou hodinky*/}
        <div className="w-full h-full flex flex-col gap-3 sm:items-end max-sm:max-w-[90%] mx-auto md:w-1/2 lg:flex-1">
          <h1 className="text-center pb-[20px] sm:w-1/2 sm:pl-[10px] md:w-full md:pl-0">
            Konfigurace
          </h1>
          {/*pouzdro a řemínek*/}
          <div className="flex max-lg:flex-col w-full items-center justify-between gap-3 sm:w-1/2 sm:pl-[10px] md:w-full md:pl-0 lg:max-w-[550px] xl:max-w-[750px] lg:mx-auto">
            {/*pouzdro*/}
            {watchCase.map((item, index) => (
              <ChooseBox
                item={item}
                key={index}
                setConfigureVariant={setConfigureVariant}
                configureVariant={configureVariant}
              />
            ))}

            {/*řemínek*/}
            {bracelet.map((item, index) => (
              <ChooseBox
                item={item}
                key={index}
                setConfigureVariant={setConfigureVariant}
                configureVariant={configureVariant}
              />
            ))}
          </div>
          {/*ciferník + ručičky + strojek*/}
          <div className="flex flex-col w-full items-center gap-3  sm:grid sm:items-start sm:pl-[10px] md:flex lg:grid lg:grid-cols-2 lg:gap-y-5 lg:max-w-[550px] xl:max-w-[750px] lg:mx-auto xl:grid-cols-3">
            {/*ciferník*/}
            {dial.map((item, index) => (
              <ChooseBox
                additionalStyle="max-md:col-start-2"
                item={item}
                key={index}
                setConfigureVariant={setConfigureVariant}
                configureVariant={configureVariant}
              />
            ))}
            {hands.map((item, index) => (
              <ChooseBox
                item={item}
                key={index}
                setConfigureVariant={setConfigureVariant}
                configureVariant={configureVariant}
              />
            ))}{" "}
            {movement.map((item, index) => (
              <ChooseBox
                item={item}
                key={index}
                setConfigureVariant={setConfigureVariant}
                configureVariant={configureVariant}
              />
            ))}
          </div>
          {/*cena a měna*/}
          <div className="w-full flex items-center sm:hidden">
            <PriceBox />
          </div>
          <div className="hidden xl:flex w-full lg:max-w-[550px] xl:max-w-[650px] lg:mx-auto ">
            <InStock />
          </div>
          {/*pokračovat*/}
          <div className="flex self-end w-fit lg:flex-1 lg:items-end xl:absolute xl:bottom-[15px]">
            <button className="text-xl bg-dark-gray w-fit px-5 py-2 rounded-md">
              Pokračovat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
