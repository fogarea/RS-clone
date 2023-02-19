import lang from "../lang";
import { Languages } from "types/lang.types";

const goalsDictionary: Languages = {
  title: {
    ru: "Цели",
    en: "Today goals"
  },
  water: {
    ru: ["мл", "Воды"],
    en: ["ml", "Water intake"]
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
