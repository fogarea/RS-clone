export type User = {
  authorized: boolean;
  id: string;
  email: string;
  name: string;
  surname: string;
  phone: string;
  profile: string;
  progress: string;
};

export type Profile = {
  id: string;
  height: number;
  weight: number;
  gender: string;
  birthday: string;
  program?: string;
};
