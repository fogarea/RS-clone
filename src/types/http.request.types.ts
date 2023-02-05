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

export type HttpTestRequest = {
  title: string;
  content: string;
};

export type HttpUnionRequest =
  | HttpRegisterRequest
  | HttpLoginRequest
  | HttpTestRequest;
