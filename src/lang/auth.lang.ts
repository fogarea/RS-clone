import lang from "./lang";
import { Languages } from "types/lang.types";

const authDictionary: Languages = {
  greeting: {
    ru: "Привет,",
    en: "Hey there,"
  },
  title: {
    ru: "С возвращением!",
    en: "Welcome Back"
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
    ru: "Вход",
    en: "Authorize"
  },
  redirect: {
    ru: "Еще нет аккаунта? ",
    en: "Already have an account? "
  },
  link: {
    ru: "Регистрация",
    en: "Register"
  },
  error: {
    ru: "Неверный адрес почты или пароль. Попробуйте еще раз!",
    en: "Wrong email or password. Please try again!"
  }
};

export const getAuthLang = () => lang.getDictionaryLang(authDictionary);
