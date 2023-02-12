import lang from "../lang";
import { Languages } from "types/lang.types";

const completeDictionary: Languages = {
  text: {
    ru: "Это поможет нам лучше узнать вас!",
    en: "It will help us to know more about you!"
  },
  textBold: {
    ru: "Заполните данные профиля,",
    en: "Let’s complete your profile"
  },
  genderPlace: {
    ru: "Пол",
    en: "Gender"
  },
  genderOptions: {
    ru: ["Мужской", "Женский"],
    en: ["Male", "Female"]
  },
  birthdayPlace: {
    ru: "Дата рождения",
    en: "Date of Birth"
  },
  weightPlace: {
    ru: "Вес (кг)",
    en: "Weight (kg)"
  },
  heightPlace: {
    ru: "Рост (см)",
    en: "Height (cm)"
  },
  btn: {
    ru: "Подтвердить",
    en: "Complete"
  }
};

export const getCompleteLang = () => lang.getDictionaryLang(completeDictionary);
