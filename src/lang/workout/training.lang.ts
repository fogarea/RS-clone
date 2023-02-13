import lang from "../lang";
import { Languages } from "types/lang.types";

const trainingDictionary: Languages = {
  back: {
    ru: "назад",
    en: "back"
  },

  calorie: {
    ru: "калории",
    en: "calories"
  }
};

export const getTrainingLang = () => lang.getDictionaryLang(trainingDictionary);
