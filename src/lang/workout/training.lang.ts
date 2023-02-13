import lang from "../lang";
import { Languages } from "types/lang.types";

const trainingDictionary: Languages = {
  back: {
    ru: "Тренировки",
    en: "Workouts"
  },
  calorie: {
    ru: "калорий",
    en: "calories"
  }
};

export const getTrainingLang = () => lang.getDictionaryLang(trainingDictionary);
