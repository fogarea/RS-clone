import lang from "../lang";
import { Languages } from "types/lang.types";

const completedTrainingsDictionary: Languages = {
  title: {
    ru: "Выполненные тренировки",
    en: "Completed workouts"
  }
};

export const getCompletedTrainingsLang = () =>
  lang.getDictionaryLang(completedTrainingsDictionary);
