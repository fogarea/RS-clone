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
  name: {
    ru: "Имя",
    en: "First Name"
  },
  surname: {
    ru: "Фамилия",
    en: "Last Name"
  },
  phone: {
    ru: "Номер телефона",
    en: "Phone"
  },
  email: {
    ru: "Почта",
    en: "Email"
  },
  password: {
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
  }
};

export const getRegLang = () => lang.getDictionaryLang(regDictionary);
