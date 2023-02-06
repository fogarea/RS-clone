import { Languages } from "types/lang.types";
import lang from "../lang";

const buttonAppDictionary: Languages = {
  btn: {
    ru: "Профиль",
    en: "Profile"
  }
};

export const getBtnAppLang = () => lang.getDictionaryLang(buttonAppDictionary);
