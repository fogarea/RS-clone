import lang from "../lang";
import { Languages } from "types/lang.types";

const profileProgramDictionary: Languages = {
  title: {
    ru: "Программа",
    en: "Program"
  },
  btn: {
    ru: "Редактировать",
    en: "Edit"
  }
};

export const getProfileProgramLang = () =>
  lang.getDictionaryLang(profileProgramDictionary);
