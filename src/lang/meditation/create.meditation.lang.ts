import lang from "../lang";
import { Languages } from "types/lang.types";

const createMeditationDictionary: Languages = {
  text: {
    ru: "Здесь вы можете создать плейлист",
    en: "You can create playlist here"
  },
  textBold: {
    ru: "Создать плейлист",
    en: "Create playlist"
  },
  titlePlace: {
    ru: "Название",
    en: "Title"
  },
  descPlace: {
    ru: "Описание",
    en: "Description"
  },
  btn: {
    ru: "Создать",
    en: "Create"
  }
};

export const getCreateMeditationLang = () =>
  lang.getDictionaryLang(createMeditationDictionary);
