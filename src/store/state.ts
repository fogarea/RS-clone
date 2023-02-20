import { User } from "types/user.types";
import { Track } from "types/track.types";
import { Program } from "types/program.types";
import { Meals } from "types/meal.types";

interface State {
  basePath: string;
  user: User;
  programs: Program[];
  meals: Meals;
  tracks: Track[];
  loaded: boolean;
}

export const initialUser = {
  authorized: false,
  id: "",
  email: "",
  name: "",
  surname: "",
  phone: "",
  avatar: 0,
  goals: {
    steps: 2000,
    water: 2
  },
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
  meditations: [],
  achievements: {
    fire: false,
    salad: false,
    dumbbells: false,
    water: false,
    calendar: false
  }
};

export const state: State = {
  basePath: "",
  user: initialUser,
  programs: [],
  meals: {
    breakfast: [],
    lunch: [],
    dinner: []
  },
  tracks: [],
  loaded: false
};
