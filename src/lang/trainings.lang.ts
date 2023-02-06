import lang from "./lang";
import { Languages } from "types/lang.types";

const trainingsDictionary: Languages = {
  title: {
    ru: "Программы тренировок",
    en: "Available training sessions"
  },
  subtitle: {
    ru: "Попробуйте наши программы тренировок. Вы можете подобрать программу под вашу цель",
    en: "Try our training programs. You can choose training program for your goal"
  },
  programTitle: {
    ru: [
      "Быть в тонусе",
      "Улучшить форму",
      "Похудеть",
      "Накачать пресс",
      "Заняться медитацией",
      "Практиковать йогу"
    ],
    en: [
      "Lean & Tone",
      "Improve Shape",
      "Lose a Fat",
      "Pump the Press",
      "Take Up Meditation",
      "Practice Yoga"
    ]
  },
  programDesc: {
    ru: [
      "Я хочу добавить мышечной массы правильным образом",
      "У меня низкий процент жира в теле и я хочу нарастить мышцы",
      "Я хочу сбросить пару киллограмм и набрать мышечную массу",
      "Я хочу накачать пресс, все 6 кубиков",
      "Я хочу исследовать преимущества медитации",
      "Я хочу практиковать йогу и дыхательные упражнения"
    ],
    en: [
      "I’m “skinny fat”. I want to add learn muscle in the right way",
      "I have a low amount of body fat and want to build more muscle",
      "I want to drop 20 lbs of fat and gain muscle mass",
      "I want to pump up the abs to get six-pack",
      "I want to get into meditation to explore the benefits",
      "I want to practice yoga and breathing exercises"
    ]
  },
  btn: {
    ru: "Попробовать",
    en: "Try it out"
  }
};

export const getTrainingsLang = () =>
  lang.getDictionaryLang(trainingsDictionary);
