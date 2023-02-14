import lang from "../lang";
import { Languages } from "types/lang.types";

const promoDictionary: Languages = {
  title: {
    ru: ["Тренироваться", "МОЖЕТ", "каждый!"],
    en: ["Everybody", "CAN", "train!"]
  },
  text: {
    ru: [
      "Дашборд, трекер тренировок и рацион питания, все в одном месте! Присоединяйтесь сейчас.\n" +
        "Нажмите на кнопку ниже."
    ],
    en: [
      "Dashboard, workouts tracker and meals planner, all in one place! Try our app right now.\n" +
        "Click the button below."
    ]
  },
  btn: {
    ru: "Присоединиться",
    en: "Join to our team"
  }
};

export const getPromoLang = () => lang.getDictionaryLang(promoDictionary);
