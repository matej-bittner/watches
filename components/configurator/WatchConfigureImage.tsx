import React from "react";
import PriceBox from "@/components/configurator/PriceBox";

const WatchConfigureImage = ({
  setOpenPreview,
  openPreview,
}: {
  setOpenPreview: React.Dispatch<React.SetStateAction<boolean>>;
  openPreview: boolean;
}) => {
  return (
    <div
      className={` border-y-4 border-r-4 border-black sm:border-none rounded-r-md sm:rounded-md flex flex-col items-center justify-center sm:py-3 sm:gap-2 bg-light-gray sm:bg-[#C7C7C7] h-full `}
    >
      <button
        className="absolute sm:hidden right-2 text-4xl top-2"
        onClick={() => setOpenPreview(!openPreview)}
      >
        x
      </button>
      <div className="flex items-center justify-center relative w-[90%] max-sm:max-w-[320px] sm:max-w-[260px] sm:flex-1 md:max-w-[320px] aspect-square ">
        <img
          src="/images/watch-config-test.png"
          alt="test"
          className="aspect-square w-full "
        />
      </div>
      <div className="hidden sm:flex">
        <PriceBox />
      </div>
    </div>
  );
};

export default WatchConfigureImage;
