import { Languages } from "types/lang.types";
import lang from "../lang";

const navAppDictionary: Languages = {
  navItem: {
    ru: ["Дашборд", "Тренировки", "Питание", "Медитации"],
    en: ["Dashboard", "Workouts", "Meals", "Meditations"]
  }
};

export const getNavAppLang = () => lang.getDictionaryLang(navAppDictionary);
