import lang from "../lang";
import { Languages } from "types/lang.types";

const profileAchievementsDictionary: Languages = {
  title: {
    ru: "Достижения",
    en: "Achievements"
  },
  water: {
    ru: "Вы поставили цель количества воды на день. Так держать!",
    en: "You've set the water intake goal. Good job!"
  },
  fire: {
    ru: "Вы сожгли калории. Продолжайте в том же духе!",
    en: "You've burned some calories. Don't stop there!"
  },
  salad: {
    ru: "Вы посмотрели рецепт. Надеемся получилось вкусно!",
    en: "You've viewed a recipe. We hope it was delicious!"
  },
  dumbbells: {
    ru: "Вы выполнили вашу первую тренировку. Не сбавляйте темп!",
    en: "You've finished your first workout. Don't slow down!"
  },
  calendar: {
    ru: "Вы подобрали музыку для медитации. Сделайте погромче!",
    en: "You've picked your meditation playlist. Turn it up!"
  }
};

export const getProfileAchievementsLang = () =>
  lang.getDictionaryLang(profileAchievementsDictionary);
