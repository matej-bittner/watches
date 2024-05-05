import React, { forwardRef, useState, useImperativeHandle } from "react";
import { IoClose } from "react-icons/io5";

const Toast = forwardRef((props, ref) => {
  const [openToast, setOpenToast] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setOpenToast(true);
      setTimeout(() => {
        setOpenToast(false);
      }, 6000);
    },
  }));
  return (
    <div
      className={`w-full px-4 py-3 sm:w-[350px] lg:w-[400px] h-[150px] max-w-[95%] right-[2.5%] sm:right-2  z-30 bg-main-dark-gray/70 ring-2 ring-main-brown bottom-2  rounded-lg flex flex-col justify-around ${openToast ? "fixed" : "hidden"}`}
    >
      <IoClose
        className="absolute right-2 top-2 cursor-pointer"
        onClick={() => setOpenToast(false)}
        size={30}
      />

      <h3>Od teď odebíráš naše novinky</h3>
      <p>
        Odběr novinek byl nastaven, informace o dalším nastení obdržíte do
        e-mailu
      </p>
    </div>
  );
});

export default Toast;
