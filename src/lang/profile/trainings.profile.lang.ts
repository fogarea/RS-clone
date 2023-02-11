import lang from "../lang";
import { Languages } from "types/lang.types";

const profileTrainingsDictionary: Languages = {
  title: {
    ru: "Тренировки",
    en: "Trainings"
  },
  btn: {
    ru: "Посмотреть все",
    en: "See all"
  }
};

export const getProfileTrainingsLang = () =>
  lang.getDictionaryLang(profileTrainingsDictionary);
