import lang from "./lang";
import { Languages } from "types/lang.types";

const aboutDictionary: Languages = {
  title: {
    ru: "Наша команда",
    en: "Our Team"
  },
  memberName: {
    ru: ["Илья Иваник", "Константин Смирнов", "Наталья Самкевич"],
    en: ["Il'ya Ivanik", "Konstantin Smirnov", "Nataliya Samkevich"]
  },
  memberRole: {
    ru: ["Тимлид", "Разработчик", "Разработчик"],
    en: ["Team lead", "Developer", "Developer"]
  }
};

export const getAboutLang = () => lang.getDictionaryLang(aboutDictionary);
