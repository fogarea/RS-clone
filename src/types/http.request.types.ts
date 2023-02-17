import { Meditation } from "./meditation.types";

export type HttpRegisterRequest = {
  name: string;
  surname: string;
  phone: string;
  email: string;
  password: string;
};

export type HttpUserRequest = {
  name: string;
  surname: string;
  avatar: number;
  phone: string;
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

export type HttpMeditationRequest = {
  _id: string;
  owner: string;
  title: string;
  description: string;
  media: string;
  tracks: string[];
};

export type HttpUnionRequest =
  | HttpRegisterRequest
  | HttpLoginRequest
  | HttpUserRequest
  | HttpProfileRequest
  | HttpMeditationRequest;
