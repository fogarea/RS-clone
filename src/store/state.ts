import { User } from "types/user.types";

interface State {
  counter: number;
  basePath: string;
  user: User;
}

export const state: State = {
  counter: 0,
  basePath: "",
  user: {
    authorized: false,
    id: "",
    login: ""
  }
};
