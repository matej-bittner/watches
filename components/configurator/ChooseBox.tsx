import React, { FC } from "react";

interface ChooseBoxProps {
  mainTitle: string;
  options: number;
  firstSecTitle?: string;
  secondSecTitle?: string;
  rounded?: boolean;
  square?: boolean;
  cols: number;
  additionalStyle?: string;
}
const ChooseBox: React.FC<ChooseBoxProps> = ({
  mainTitle,
  options,
  firstSecTitle,
  secondSecTitle,
  rounded,
  square,
  additionalStyle,
  cols,
}) => {
  return (
    <div
      className={`flex flex-col w-full items-center gap-2 ${additionalStyle && `${additionalStyle}`}`}
    >
      <h2>{mainTitle}</h2>
      <div className="flex flex-col w-fit gap-1">
        <div className="space-y-1">
          {options === 2 && <h3>{firstSecTitle}</h3>}
          {/*variace*/}
          <div
            className={` flex-1 w-full grid grid-cols-3  items-center justify-center ${rounded ? "rounded-buttons gap-[15px] " : square && "square-buttons gap-[30px]"}`}
          >
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
        <div className={`space-y-1 ${options === 1 && "hidden"}`}>
          <h3>{secondSecTitle}</h3>
          {/*variace*/}
          <div
            className={` flex-1 w-full grid grid-cols-3 items-center justify-center ${rounded ? "rounded-buttons gap-[15px] " : square && "square-buttons gap-[30px]"}`}
          >
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseBox;
