import lang from "./lang";
import { Languages } from "types/lang.types";

const trainingCardDictionary: Languages = {
  caloriesText: {
    ru: "калорий",
    en: "calories"
  },
  btn: {
    ru: "Открыть",
    en: "Open"
  }
};

export const getTrainingCardLang = () =>
  lang.getDictionaryLang(trainingCardDictionary);
