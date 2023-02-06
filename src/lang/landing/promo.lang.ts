import lang from "../lang";
import { Languages } from "types/lang.types";

const promoDictionary: Languages = {
  title: {
    ru: ["Тренироваться", "МОЖЕТ", "каждый!"],
    en: ["Everybody", "CAN", "train!"]
  },
  text: {
    ru: [
      "Дашборд, трекер тренировок и рацион питания, все в одном месте! Зарегистрируйтесь чтобы начать.\n" +
        "Нажмите на кнопку ниже."
    ],
    en: [
      "Dashboard, workout tracker and meal planner, all in one place! Try our app right now.\n" +
        "Click the link below."
    ]
  },
  btn: {
    ru: "Присоединиться",
    en: "Join to our team"
  }
};

export const getPromoLang = () => lang.getDictionaryLang(promoDictionary);
