import { useContext } from "react";
import { MangaMakerUiContext } from "../MangaMakerUi.context";

const useMangaMakerUi = () => {
  const ctx = useContext(MangaMakerUiContext);
  if (!ctx) {
    throw new Error("Sorry but no context found.");
  }
  return ctx;
};

export default useMangaMakerUi;
