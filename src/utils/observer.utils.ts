import { ObserverCallback, ObserverEvent } from "types/observer.types";

type Events = Record<ObserverEvent, ObserverCallback[]>;

class EventEmitter {
  private events = {} as Events;

  on(event: ObserverEvent, callback: ObserverCallback) {
    this.events[event] ??= [];
    this.events[event].push(callback);
  }

  emit(event: ObserverEvent) {
    if (this.events[event]) {
      for (const callback of this.events[event]) {
        callback();
      }
    }
  }
}

export default EventEmitter;
