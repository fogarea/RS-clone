import lang from "../lang";
import { Languages } from "types/lang.types";

const trainingListDictionary: Languages = {
  title: {
    ru: "Тренировки",
    en: "Workouts"
  }
};

export const getTrainingListLang = () =>
  lang.getDictionaryLang(trainingListDictionary);
