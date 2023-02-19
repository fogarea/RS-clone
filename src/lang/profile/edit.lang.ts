import lang from "../lang";
import { Languages } from "types/lang.types";

const profileEditDictionary: Languages = {
  text: {
    ru: "Здесь вы можете изменить нужные вам поля",
    en: "You can change the field names here"
  },
  textBold: {
    ru: "Редактирование профиля",
    en: "Edit profile"
  },
  back: {
    ru: "Профиль",
    en: "Profile"
  },
  btn: {
    ru: "Подтвердить",
    en: "Complete"
  }
};

export const getProfileEditLang = () =>
  lang.getDictionaryLang(profileEditDictionary);
