import { Program } from "./program.types";
import { Progress } from "./progress.types";
import { Meditation } from "./meditation.types";
import { Achievements } from "types/achievements.types";

export type User = {
  authorized: boolean;
  id: string;
  email: string;
  name: string;
  surname: string;
  phone: string;
  avatar: number;
  profile: Profile;
  progress: Progress;
  achievements: Achievements;
  meditations: Meditation[];
};

export type Profile = {
  id: string;
  height: number;
  weight: number;
  gender: string;
  birthday: string;
  program?: Program;
};
