export type HttpRegisterRequest = {
  login: string;
  password: string;
  gender: string;
};

export type HttpLoginRequest = {
  login: string;
  password: string;
};

export type HttpTestRequest = {
  title: string;
  content: string;
};

export type HttpUnionRequest =
  | HttpRegisterRequest
  | HttpLoginRequest
  | HttpTestRequest;
