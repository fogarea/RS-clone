import { User } from "types/user.types";
import { Program } from "types/program.types";

interface State {
  counter: number;
  basePath: string;
  user: User;
  programs: Program[];
}

export const state: State = {
  counter: 0,
  basePath: "",
  user: {
    authorized: false,
    id: "",
    email: "",
    name: "",
    surname: "",
    phone: ""
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
