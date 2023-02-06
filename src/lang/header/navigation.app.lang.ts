import { Languages } from "types/lang.types";
import lang from "../lang";

const navAppDictionary: Languages = {
  navItem: {
    ru: ["Дашборд", "Тренировки", "Питание", "Прогресс"],
    en: ["Dashboard", "Workout", "Meal", "Progress"]
  }
};

export const getNavAppLang = () => lang.getDictionaryLang(navAppDictionary);
