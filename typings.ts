import { Dispatch, SetStateAction } from "react";

export type ShowAbout = {
  setShowAbout: Dispatch<SetStateAction<boolean>>;
  showAbout: boolean;
};
