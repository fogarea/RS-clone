import { Profile, User } from "types/user.types";
import { Program } from "types/program.types";

interface State {
  basePath: string;
  user: User;
  profile: Profile;
  programs: Program[];
}

export const state: State = {
  basePath: "",
  user: {
    authorized: false,
    id: "",
    email: "",
    name: "",
    surname: "",
    phone: "",
    profile: "",
    progress: ""
  },
  profile: {
    id: "",
    height: 0,
    weight: 0,
    gender: "",
    birthday: "",
    program: ""
  },
  programs: [
    {
      title: "",
      description: "",
      media: [""],
      trainings: [""],
      id: ""
    }
  ]
};
