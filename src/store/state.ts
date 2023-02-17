import { User } from "types/user.types";
import { Program } from "types/program.types";
import { Meals } from "types/meal.types";

interface State {
  basePath: string;
  user: User;
  programs: Program[];
  meals: Meals;
}

export const initialUser = {
  authorized: false,
  id: "",
  email: "",
  name: "",
  surname: "",
  phone: "",
  avatar: 0,
  progress: {
    id: "",
    watched: 0,
    calories: 0,
    finished: []
  },
  profile: {
    id: "",
    height: 0,
    weight: 0,
    gender: "",
    birthday: ""
  },
  achievements: { "": false }
};

export const state: State = {
  basePath: "",
  user: initialUser,
  programs: [
    {
      title: "",
      description: "",
      media: [""],
      trainings: [],
      id: ""
    }
  ],
  meals: {
    breakfast: [],
    lunch: [],
    dinner: []
  }
};
