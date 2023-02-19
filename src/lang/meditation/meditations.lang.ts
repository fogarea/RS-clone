import lang from "../lang";
import { Languages } from "types/lang.types";

const meditationsListDictionary: Languages = {
  title: {
    ru: "Медитации",
    en: "Meditations"
  },
  open: {
    ru: "Открыть",
    en: "Open"
  },
  back: {
    ru: "Медитации",
    en: "Meditations"
  },
  edit: {
    ru: "Изменить",
    en: "Edit"
  },
  nothing: {
    ru: "Пока что у вас нет добавленных медитаций",
    en: "No meditations yet"
  },
  noTracks: {
    ru: "Пока что у вас нет добавленных треков",
    en: "No tracks yet"
  }
};

export const getMeditationsLang = () =>
  lang.getDictionaryLang(meditationsListDictionary);
