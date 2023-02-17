import lang from "../lang";
import { Languages } from "types/lang.types";

const mealsDictionary: Languages = {
  breakfast: {
    ru: "Завтрак",
    en: "Breakfast"
  },
  lunch: {
    ru: "Обед",
    en: "Lunch"
  },
  dinner: {
    ru: "Ужин",
    en: "Dinner"
  }
};

export const getMealsLang = () => lang.getDictionaryLang(mealsDictionary);
