import lang from "../lang";
import { Languages } from "types/lang.types";

const profileAchievementsDictionary: Languages = {
  title: {
    ru: "Достижения",
    en: "Achievements"
  }
};

export const getProfileAchievementsLang = () =>
  lang.getDictionaryLang(profileAchievementsDictionary);
