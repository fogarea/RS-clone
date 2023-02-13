import lang from "../lang";
import { Languages } from "types/lang.types";

const profileProgressDictionary: Languages = {
  title: {
    ru: "Прогресс",
    en: "Progress"
  },
  caloriesText: {
    ru: "Потрачено калорий",
    en: "Calories burned"
  },
  trainings: {
    ru: "Cделано тренировок",
    en: "Trainings completed"
  }
};

export const getProfileProgressLang = () =>
  lang.getDictionaryLang(profileProgressDictionary);
