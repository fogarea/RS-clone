export type ObserverEvent =
  | "route.update"
  | "auth.update"
  | "auth.update.header"
  | "goals.update"
  | "meditation.update.list";

export type ObserverCallback = () => void;
