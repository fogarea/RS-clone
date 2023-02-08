import lang from "../lang";
import { Languages } from "types/lang.types";

const programsAuthDictionary: Languages = {
  title: {
    ru: "Выберите программу",
    en: "What is your goal?"
  },
  subtitle: {
    ru: "Это поможет нам подобрать подходящие тренировки",
    en: "It will help us to choose a best program for you"
  },
  btn: {
    ru: "Выбрать",
    en: "Choose"
  }
};

export const getProgramsAuthLang = () =>
  lang.getDictionaryLang(programsAuthDictionary);
