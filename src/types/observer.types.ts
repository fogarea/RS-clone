export type ObserverEvent =
  | "route.update"
  | "auth.update"
  | "auth.update.header";

export type ObserverCallback = () => void;
