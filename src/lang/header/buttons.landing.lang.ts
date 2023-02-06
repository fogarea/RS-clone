import { Languages } from "types/lang.types";
import lang from "../lang";

const buttonsLandingDictionary: Languages = {
  btn: {
    ru: ["Вход", "Регистрация"],
    en: ["Sign In", "Sign Up"]
  }
};

export const getBtnLandingLang = () =>
  lang.getDictionaryLang(buttonsLandingDictionary);
