import lang from "../lang";
import { Languages } from "types/lang.types";

const activeTrainingsDictionary: Languages = {
  title: {
    ru: "Предстоящие тренировки",
    en: "Active workouts"
  }
};

export const getActiveTrainingsLang = () =>
  lang.getDictionaryLang(activeTrainingsDictionary);
