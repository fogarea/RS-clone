import lang from "../lang";
import { Languages } from "types/lang.types";

const regDictionary: Languages = {
  greeting: {
    ru: "Привет,",
    en: "Hey there,"
  },
  title: {
    ru: "Присоединяйся!",
    en: "Create an Account"
  },
  namePlace: {
    ru: "Имя",
    en: "First Name"
  },
  surnamePlace: {
    ru: "Фамилия",
    en: "Last Name"
  },
  phonePlace: {
    ru: "Номер телефона",
    en: "Phone"
  },
  emailPlace: {
    ru: "Почта",
    en: "Email"
  },
  passwordPlace: {
    ru: "Пароль",
    en: "Password"
  },
  btn: {
    ru: "Регистрация",
    en: "Register"
  },
  redirect: {
    ru: "Уже есть аккаунт? ",
    en: "Already have an account? "
  },
  link: {
    ru: "Вход",
    en: "Login"
  },
  error: {
    ru: "Тут что-то не так, попробуйте еще раз!",
    en: "Something went wrong, please try again!"
  }
};

export const getRegLang = () => lang.getDictionaryLang(regDictionary);
