export type Training = {
  id: string;
  title: string;
  description: string;
  tag: string[];
  icon: string;
  media: string;
  calories: number;
};

export type Trainings = {
  [key: string]: {
    finished: boolean;
    watchedTime: number;
    currentTime: number;
    calories: number;
  };
};
