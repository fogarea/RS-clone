import lang from "../lang";
import { Languages } from "types/lang.types";

const goalsDictionary: Languages = {
  title: {
    ru: "Цели",
    en: "Today goals"
  },
  water: {
    ru: ["л", "Воды"],
    en: ["L", "Water intake"]
  },
  steps: {
    ru: "Шагов",
    en: "Steps"
  },
  btn: {
    ru: "Редактировать",
    en: "Edit"
  }
};

export const getDashboardGoalsLang = () =>
  lang.getDictionaryLang(goalsDictionary);
