import lang from "../lang";
import { Languages } from "types/lang.types";

const workoutDictionary: Languages = {
  open: {
    ru: "открыть",
    en: "open"
  },

  change: {
    ru: "сменить",
    en: "change"
  }
};

export const getWorkoutLang = () => lang.getDictionaryLang(workoutDictionary);
