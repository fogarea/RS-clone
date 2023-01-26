import counterModel from "model/counter.model";
import counterService from "service/counter.service";

class CounterController {
  increment() {
    counterModel.increment();
    counterModel.emit("counter.update");
  }

  decrement() {
    counterModel.decrement();
    counterModel.emit("counter.update");
  }

  async getCounter() {
    counterModel.emit("loader.counter.show");
    const initialCounter = await counterService.getCounter();
    counterModel.updateCounter(initialCounter);
    counterModel.emit("counter.update");
  }
}

export default new CounterController();
