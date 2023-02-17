import lang from "../lang";
import { Languages } from "types/lang.types";

const mealCardDictionary: Languages = {
  caloriesText: {
    ru: "ккал",
    en: "kCal"
  },
  timeText: {
    ru: "мин",
    en: "mins"
  },
  btn: {
    ru: "Открыть",
    en: "View"
  }
};

export const getMealCardLang = () => lang.getDictionaryLang(mealCardDictionary);
