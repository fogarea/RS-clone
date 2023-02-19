import lang from "../lang";
import { Languages } from "types/lang.types";

const updateMeditationDictionary: Languages = {
  text: {
    ru: "Здесь вы можете обновить плейлист",
    en: "You can update playlist here"
  },
  textBold: {
    ru: "Обновить плейлист",
    en: "Update playlist"
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
    ru: "Обновить",
    en: "Update"
  }
};

export const getUpdateMeditationLang = () =>
  lang.getDictionaryLang(updateMeditationDictionary);
