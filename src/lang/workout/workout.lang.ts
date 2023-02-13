import lang from "../lang";
import { Languages } from "types/lang.types";

const workoutDictionary: Languages = {
  open: {
    ru: "открыть",
    en: "open"
  },

  back: {
    ru: "назад",
    en: "back"
  }
};

export const getWorkoutLang = () => lang.getDictionaryLang(workoutDictionary);
