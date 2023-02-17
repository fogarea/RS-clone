export type ObserverEvent =
  | "route.update"
  | "auth.update"
  | "auth.update.header"
  | "meditation.update.list";

export type ObserverCallback = () => void;
