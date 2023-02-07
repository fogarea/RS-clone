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
  gender: {
    ru: "Пол",
    en: "Gender"
  },
  genderOptions: {
    ru: ["Мужской", "Женский"],
    en: ["Male", "Female"]
  },
  birthday: {
    ru: "Дата рождения",
    en: "Date of Birth"
  },
  weight: {
    ru: "Вес (кг)",
    en: "Weight (kg)"
  },
  height: {
    ru: "Рост (см)",
    en: "Height (cm)"
  },
  btn: {
    ru: "Подтвердить",
    en: "Complete"
  }
};

export const getCompleteLang = () => lang.getDictionaryLang(completeDictionary);
