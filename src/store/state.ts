import { User } from "types/user.types";
import { Program } from "types/program.types";

interface State {
  basePath: string;
  user: User;
  programs: Program[];
}

export const initialUser = {
  authorized: false,
  id: "",
  email: "",
  name: "",
  surname: "",
  phone: "",
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
  }
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
  ]
};
