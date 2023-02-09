import { Training } from "./training.types";

export type Program = {
  title: string;
  description: string;
  media: string[];
  trainings: Training[];
  id: string;
};
