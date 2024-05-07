import React, { useState } from "react";
import { it } from "node:test";
import { hands } from "@/constants";
import { element } from "prop-types";

interface ChooseBoxProps {
  additionalStyle?: string;
  item?: any;
  setConfigureVariant: any;
  configureVariant: any;
}
const ChooseBox: React.FC<ChooseBoxProps> = ({
  additionalStyle,
  item,
  setConfigureVariant,
  configureVariant,
}) => {
  let numberOfCols = item.secondOption
    ? item.firstOption.length > item.secondOption.length
      ? item.firstOption.length
      : item.secondOption.length
    : item.firstOption.length;

  const hasMultipleOptions = Object.keys(item).filter((key) =>
    key.endsWith("Option"),
  ).length;

  const data = [];

  for (let i = 1; i <= hasMultipleOptions; i++) {
    data.push(
      <div className="space-y-1" key={i}>
        {/*{item.firstOptionTitle && <h3>{item.firstOptionTitle}</h3>}*/}
        {i === 1 && item.firstOptionTitle && <h3>{item.firstOptionTitle}</h3>}
        {i === 2 && item.secondOptionTitle && <h3>{item.secondOptionTitle}</h3>}
        {/*variace*/}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${numberOfCols}, minmax(0, 1fr))`,
          }}
          className={` flex-1 w-full items-center justify-center  ${item.style === "rounded" && "rounded-buttons gap-[15px]"} ${item.style === "square" && "square-buttons gap-[30px]"}`}
        >
          {item.firstOption.map((option: any) => {
            return (
              <button
                name={item.mainTitle.toLowerCase()}
                onClick={(e) =>
                  setConfigureVariant({
                    ...configureVariant,
                    // @ts-ignore
                    [e.target.name]: option,
                  })
                }
                key={option.id}
                style={{ backgroundColor: option.color }}
              ></button>
            );
          })}
        </div>
      </div>,
    );
  }

  return (
    <div
      className={`flex flex-col w-full items-center gap-2 ${additionalStyle && `${additionalStyle}`}`}
    >
      <h2>{item.mainTitle}</h2>
      <div className="flex flex-col w-fit gap-1">
        {data}
        {/*<div className="space-y-1">*/}
        {/*  {item.firstOptionTitle && <h3>{item.firstOptionTitle}</h3>}*/}
        {/*  /!*variace*!/*/}
        {/*  */}
        {/*  <div*/}
        {/*    style={{*/}
        {/*      display: "grid",*/}
        {/*      gridTemplateColumns: `repeat(${numberOfCols}, minmax(0, 1fr))`,*/}
        {/*    }}*/}
        {/*    className={` flex-1 w-full items-center justify-center  ${item.style === "rounded" && "rounded-buttons gap-[15px]"} ${item.style === "square" && "square-buttons gap-[30px]"}`}*/}
        {/*  >*/}
        {/*    {item.firstOption.map((option: any) => {*/}
        {/*      return (*/}
        {/*        <button*/}
        {/*          name={item.mainTitle.toLowerCase()}*/}
        {/*          onClick={(e) =>*/}
        {/*            setConfigureVariant({*/}
        {/*              ...configureVariant,*/}
        {/*              // @ts-ignore*/}
        {/*              [e.target.name]: option,*/}
        {/*            })*/}
        {/*          }*/}
        {/*          key={option.id}*/}
        {/*          style={{ backgroundColor: option.color }}*/}
        {/*        ></button>*/}
        {/*      );*/}
        {/*    })}*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*{item.secondOption && (*/}
        {/*  <div className={`space-y-1 `}>*/}
        {/*    {item.secondOptionTitle && <h3>{item.secondOptionTitle}</h3>}*/}
        {/*    /!*variace*!/*/}
        {/*    <div*/}
        {/*      style={{*/}
        {/*        display: "grid",*/}
        {/*        gridTemplateColumns: `repeat(${numberOfCols}, minmax(0, 1fr))`,*/}
        {/*      }}*/}
        {/*      className={` flex-1 w-full items-center justify-center  ${item.style === "rounded" && "rounded-buttons gap-[15px]"} ${item.style === "square" && "square-buttons gap-[30px]"}`}*/}
        {/*    >*/}
        {/*      {item.secondOption.map((option: any) => (*/}
        {/*        <button*/}
        {/*          name={item.mainTitle.toLowerCase()}*/}
        {/*          onClick={(e) =>*/}
        {/*            setConfigureVariant({*/}
        {/*              ...configureVariant,*/}
        {/*              // @ts-ignore*/}
        {/*              [e.target.name]: option,*/}
        {/*            })*/}
        {/*          }*/}
        {/*          key={option.id}*/}
        {/*          style={{ backgroundColor: option.color }}*/}
        {/*        ></button>*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
    </div>
  );
};

export default ChooseBox;
