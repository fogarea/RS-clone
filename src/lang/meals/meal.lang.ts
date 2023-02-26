import lang from "../lang";
import { Languages } from "types/lang.types";

const mealDictionary: Languages = {
  desc: {
    ru: "Описание",
    en: "Description"
  },
  nutrition: {
    ru: "Энергетическая ценность",
    en: "Nutrition"
  },
  calorie: {
    ru: "ккал",
    en: "kCal"
  },
  fats: {
    ru: "жиры",
    en: "fats"
  },
  proteins: {
    ru: "белки",
    en: "proteins"
  },
  carb: {
    ru: "углеводы",
    en: "carbs"
  },
  gram: {
    ru: "г",
    en: "g"
  },
  steps: {
    ru: "Рецепт",
    en: "Step by Step"
  },
  step: {
    ru: "Шаг",
    en: "Step"
  },
  ingredients: {
    ru: "Ингредиенты",
    en: "Ingredients"
  },
  back: {
    ru: "Питание",
    en: "Meals"
  }
};

export const getMealLang = () => lang.getDictionaryLang(mealDictionary);
