import lang from "../lang";
import { Languages } from "types/lang.types";

const profilePhysiqueDictionary: Languages = {
  title: {
    ru: "Параметры",
    en: "Personal details"
  },
  heightText: {
    ru: "Рост",
    en: "Height"
  },
  weightText: {
    ru: "Вес",
    en: "Weight"
  },
  ageText: {
    ru: "Возраст",
    en: "Age"
  }
};

export const getProfilePhysiqueLang = () =>
  lang.getDictionaryLang(profilePhysiqueDictionary);
