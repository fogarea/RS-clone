import { Languages } from "types/lang.types";
import lang from "../lang";

const switcherDictionary: Languages = {
  title: {
    ru: "Выбрать язык",
    en: "Select language"
  },
  optionRu: {
    ru: "Русский",
    en: "Russian"
  },
  optionEn: {
    ru: "Английский",
    en: "English"
  }
};

export const getSwitcherLang = () => lang.getDictionaryLang(switcherDictionary);
