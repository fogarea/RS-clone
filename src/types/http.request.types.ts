export type HttpRegisterRequest = {
  name: string;
  surname: string;
  phone: string;
  email: string;
  password: string;
};

export type HttpLoginRequest = {
  email: string;
  password: string;
};

export type HttpProfileRequest = {
  _id: string;
  height?: number;
  weight?: number;
  gender?: string;
  birthday?: string;
  program?: string;
};

export type HttpProgressRequest = {
  _id: string;
  watched: number;
  calories: number;
  finished: string[];
};

export type HttpUnionRequest =
  | HttpRegisterRequest
  | HttpLoginRequest
  | HttpProfileRequest;
