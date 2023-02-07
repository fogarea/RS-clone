import lang from "./lang";
import { Languages } from "types/lang.types";

const schoolDictionary: Languages = {
  title: {
    ru: "Наша школа",
    en: "Our School"
  },
  text: {
    ru: [
      "Приложение разработано для",
      "в рамках финального задания.",
      "это бесплатная образовательная программа, организованная сообществом разработчиков The Rolling Scopes с 2013 года"
    ],
    en: [
      "The application is developed for",
      "final task.",
      "is free-of-charge and community-based education program conducted by The Rolling Scopes developer community since 2013."
    ]
  }
};

export const getSchoolLang = () => lang.getDictionaryLang(schoolDictionary);
