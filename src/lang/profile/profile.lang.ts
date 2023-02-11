import lang from "../lang";
import { Languages } from "types/lang.types";

const profileDictionary: Languages = {
  title: {
    ru: "",
    en: "Program"
  },
  btn: {
    ru: "Редактировать",
    en: "Edit"
  }
};

export const getProfileLang = () => lang.getDictionaryLang(profileDictionary);
