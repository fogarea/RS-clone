import { Languages } from "types/lang.types";
import lang from "../lang";

const navLandingDictionary: Languages = {
  navItem: {
    ru: ["Главная", "Тренировки", "Контакты"],
    en: ["Main", "Trainings", "Contacts"]
  }
};

export const getNavLandingLang = () =>
  lang.getDictionaryLang(navLandingDictionary);
