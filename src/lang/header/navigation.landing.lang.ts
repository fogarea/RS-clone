import { Languages } from "types/lang.types";
import lang from "../lang";

const navLandingDictionary: Languages = {
  navItem: {
    ru: ["Главная", "Программы", "Контакты"],
    en: ["Main", "Programs", "Contacts"]
  }
};

export const getNavLandingLang = () =>
  lang.getDictionaryLang(navLandingDictionary);
