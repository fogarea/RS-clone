export type ObserverEvent =
  | "counter.update"
  | "route.update"
  | "loader.counter.show"
  | "auth.update"
  | "auth.update.header";

export type ObserverCallback = () => void;
