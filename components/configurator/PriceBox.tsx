import React from "react";

const PriceBox = () => {
  return (
    <div className="w-full flex items-center justify-center max-sm:py-3 sm:flex-col-reverse sm:gap-3">
      {/*cena*/}
      <div id="price" className="flex gap-2 text-2xl text-white">
        <p>5600</p>
        <p>Kč</p>
      </div>
      {/*měna*/}
      <div className="flex flex-col items-center gap-2 max-sm:absolute left-[5%] bottom-[20px]">
        <h2 className="sm:hidden">Měna</h2>
        <div className="flex gap-3">
          <div className="flex items-center gap-2">
            <button className="rounded-full w-[15px] aspect-square bg-dark-gray ring-2 ring-black" />
            <p className="text-xs lg:text-sm">CZK</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-full w-[15px] aspect-square bg-dark-gray ring-2 ring-black" />
            <p className="text-xs lg:text-sm">EUR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceBox;
