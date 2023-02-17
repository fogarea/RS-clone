import lang from "../lang";
import { Languages } from "types/lang.types";

const meditationListDictionary: Languages = {
  title: {
    ru: "Медитации",
    en: "Meditations"
  },
  save: {
    ru: "сохранить",
    en: "save"
  },
  edit: {
    ru: "редактировать",
    en: "edit"
  },
  open: {
    ru: "открыть",
    en: "open"
  },
  remove: {
    ru: "удалить",
    en: "remove"
  },
  add: {
    ru: "добавить",
    en: "add"
  },
  back: {
    ru: "назад",
    en: "back"
  },
  change: {
    ru: "изменить",
    en: "change"
  },
  nothing: {
    ru: "нет медитаций",
    en: "No meditations yet"
  },
  noTracks: {
    ru: "нет треков",
    en: "No tracks yet"
  }
};

export const getMeditationsLang = () =>
  lang.getDictionaryLang(meditationListDictionary);
