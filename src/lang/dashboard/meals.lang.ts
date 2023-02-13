import lang from "../lang";
import { Languages } from "types/lang.types";

const mealsDictionary: Languages = {
  title: {
    ru: "Питание",
    en: "Today meals"
  },
  breakfastTitle: {
    ru: "Завтрак",
    en: "Breakfast"
  },
  lunchTitle: {
    ru: "Обед",
    en: "Lunch"
  },
  dinnerTitle: {
    ru: "Ужин",
    en: "Dinner"
  },
  foods: {
    ru: "блюд",
    en: "Foods"
  },
  btn: {
    ru: "Смотреть",
    en: "View"
  }
};

export const getMealsLang = () => lang.getDictionaryLang(mealsDictionary);
