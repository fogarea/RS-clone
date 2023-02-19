import lang from "../lang";
import { Languages } from "types/lang.types";

const exitDictionary: Languages = {
  title: {
    ru: "Вы уверены что хотите выйти?",
    en: "Are you sure you want to leave the app?"
  },
  noBtn: {
    ru: "Нет",
    en: "No"
  },
  yesBtn: {
    ru: "Да",
    en: "Yes"
  }
};

export const getExitLang = () => lang.getDictionaryLang(exitDictionary);
