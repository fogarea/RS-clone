import lang from "../lang";
import { Languages } from "types/lang.types";

const profileOtherDictionary: Languages = {
  title: {
    ru: "Другое",
    en: "Other"
  },
  text: {
    ru: "Чтобы выйти из приложения, нажмите на кнопку",
    en: "If you want to exit from account, click the button"
  },
  btn: {
    ru: "Выйти",
    en: "Log out"
  }
};

export const getProfileOtherLang = () =>
  lang.getDictionaryLang(profileOtherDictionary);
