import lang from "../lang";
import { Languages } from "types/lang.types";

const goalsDictionary: Languages = {
  title: {
    ru: [
      "Отслеживайте цели",
      "Не сдавайтесь",
      "Питайтесь правильно",
      "Улучшите сон"
    ],
    en: ["Track Your Goal", "Get Burn", "Eat Well", "Improve Sleep"]
  },
  text: {
    ru: [
      "Не беспокойтесь, если у вас есть проблемы с определением целей, мы можем помочь вам определить и отслеживать их",
      "Каждая выполненная тренировка приближает вас к цели. Главное быть настроенным на нее",
      "Давайте начнем правильно питаться вместе, мы поможем подобрать вам рацион на каждый день. Здоровое питание - это весело",
      "Улучшите качество сна вместе с нами, хорошее качество сна сделает ваш день продуктивнее"
    ],
    en: [
      "Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals",
      "Let’s keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever",
      "Let's start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun",
      "Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning"
    ]
  },
  btn: {
    ru: "Зарегистрироваться",
    en: "Sign Up Now"
  }
};

export const getGoalsLang = () => lang.getDictionaryLang(goalsDictionary);
