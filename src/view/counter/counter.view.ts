import counterController from "controller/counter.controller";
import counterModel from "model/counter.model";
import { state } from "store/state";
import { Layout } from "types/layout.types";

class CounterView {
  layout = {} as Layout;

  async init(root: HTMLElement) {
    this.createLayout(root);
    this.subscribe();
    await counterController.getCounter();
    this.render();
  }

  subscribe() {
    counterModel.on("loader.counter.show", () => {
      this.renderLoader(this.layout.inputContainer);
    });

    counterModel.on("counter.update", () => {
      this.renderInput(this.layout.inputContainer);
    });
  }

  createLayout(root: HTMLElement) {
    this.layout.inputContainer = document.createElement("div");
    this.layout.buttonsContainer = document.createElement("div");

    root.replaceChildren(
      this.layout.inputContainer,
      this.layout.buttonsContainer
    );
  }

  renderLoader(root: HTMLElement) {
    const loader = document.createElement("span");
    loader.classList.add("loader");

    root.replaceChildren(loader);
  }

  render() {
    this.renderButtonMinus(this.layout.buttonsContainer);
    this.renderButtonPlus(this.layout.buttonsContainer);
  }

  renderInput(root: HTMLElement) {
    const input = document.createElement("input");
    input.value = state.counter.toString();

    root.replaceChildren(input);
  }

  renderButtonMinus(root: HTMLElement) {
    const minus = document.createElement("button");
    minus.textContent = "-";
    minus.addEventListener("click", counterController.decrement);

    root.append(minus);
  }

  renderButtonPlus(root: HTMLElement) {
    const plus = document.createElement("button");
    plus.textContent = "+";
    plus.addEventListener("click", counterController.increment);

    root.append(plus);
  }
}

export default new CounterView();
