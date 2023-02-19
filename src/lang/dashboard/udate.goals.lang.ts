import lang from "../lang";
import { Languages } from "types/lang.types";

const updateGoalsDictionary: Languages = {
  text: {
    ru: "Здесь вы можете изменить цели",
    en: "You can change your goals here"
  },
  textBold: {
    ru: "Редактироавать цели",
    en: "Change goals"
  },
  btn: {
    ru: "Обновить",
    en: "Update"
  }
};

export const getUpdateGoalsLang = () =>
  lang.getDictionaryLang(updateGoalsDictionary);
