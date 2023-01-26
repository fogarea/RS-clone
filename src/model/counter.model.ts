import { state } from "store/state";
import EventEmitter from "utils/observer.utils";

class CounterModel extends EventEmitter {
  increment() {
    state.counter++;
  }

  decrement() {
    state.counter--;
  }

  updateCounter(newCounter: number) {
    state.counter = newCounter;
  }

}

export default new CounterModel();
