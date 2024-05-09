import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface EditButtonProps {
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
  editable: boolean;
  alertText: string;
}
const EditButton: React.FC<EditButtonProps> = ({
  setEditable,
  editable,
  alertText,
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [buttonType, setButtonType] = useState<"button" | "submit">("button");

  const discardChanges = () => {
    if (editable) {
      setEditable(false);
      setOpenDialog(false);
      setButtonType("button");
    } else {
      setOpenDialog(false);
    }
  };

  const saveChanges = () => {
    if (editable) {
      // udelej zmenu v db
      setButtonType("submit");
      setOpenDialog(false);
      setEditable(false);
    } else {
      setButtonType("button");
      setEditable(true);
      setOpenDialog(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpenDialog(true)}
        className="rounded-md px-2 py-1 bg-blue-100 hover:bg-blue-200 text-black"
      >
        {editable ? "Uložit/Zrušit" : "Editovat"}
      </button>
      <div
        className={`${!openDialog && "hidden"} w-screen h-screen xl:w-[980px] absolute top-0 left-0 bg-black/10 z-40 backdrop-blur-sm flex items-center justify-center`}
      >
        <div className="border-[1px] border-black mx-2 w-full h-fit bg-gray-200 rounded-xl p-2 flex flex-col items-center gap-4 text-center max-w-[450px]">
          <h2 className="text-xl font-medium">Jsi si jistý?</h2>
          <p>Chystáš se změnit {alertText}. Změna nelze vrátit zpět.</p>
          <div className="flex w-full gap-2 font-medium text-lg">
            <button
              type={buttonType}
              onClick={saveChanges}
              className="px-2 py-1 bg-black text-white rounded-md w-1/2"
            >
              {editable ? "Potrvrdit změnu" : "Editovat"}
            </button>
            <button
              type="button"
              onClick={discardChanges}
              className="px-2 py-1 bg-white rounded-md w-1/2"
            >
              Zrušit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditButton;

//
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
//
// interface EditButtonProps {
//   setEditable: React.Dispatch<React.SetStateAction<boolean>>;
//   editable: boolean;
//   alertText: string;
//   type: string;
// }
// const EditButton: React.FC<EditButtonProps> = ({
//                                                  setEditable,
//                                                  editable,
//                                                  alertText,
//                                                }) => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [buttonType, setButtonType] = useState<"button" | "submit">("button");
//
//   const discardChanges = () => {
//     if (editable) {
//       setEditable(false);
//       setOpenDialog(false);
//       setButtonType("button");
//     } else {
//       setOpenDialog(false);
//     }
//   };
//
//   const saveChanges = () => {
//     if (editable) {
//       // udelej zmenu v db
//       setButtonType("submit");
//       setOpenDialog(false);
//       setEditable(false);
//     } else {
//       setButtonType("button");
//       setEditable(true);
//       setOpenDialog(false);
//     }
//   };
//
//   return (
//     <div>
//       <button
//         type="button"
//         onClick={() => setOpenDialog(true)}
//         className="rounded-md px-2 py-1 bg-blue-100 hover:bg-blue-200 text-black"
//       >
//         {editable ? "Uložit/Zrušit" : "Editovat"}
//       </button>
//       <div
//         className={`${!openDialog && "hidden"} w-screen h-screen xl:w-[980px] absolute top-0 left-0 bg-black/10 z-40 backdrop-blur-sm flex items-center justify-center`}
//       >
//         <div className="border-[1px] border-black mx-2 w-full h-fit bg-gray-200 rounded-xl p-2 flex flex-col items-center gap-4 text-center max-w-[450px]">
//           <h2 className="text-xl font-medium">Jsi si jistý?</h2>
//           <p>Chystáš se změnit {alertText}. Změna nelze vrátit zpět.</p>
//           <div className="flex w-full gap-2 font-medium text-lg">
//             <button
//               type={buttonType}
//               onClick={saveChanges}
//               className="px-2 py-1 bg-black text-white rounded-md w-1/2"
//             >
//               {editable ? "Potrvrdit změnu" : "Editovat"}
//             </button>
//             <button
//               type="button"
//               onClick={discardChanges}
//               className="px-2 py-1 bg-white rounded-md w-1/2"
//             >
//               Zrušit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default EditButton;
