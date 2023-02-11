import { Training } from "types/training.types";
import { getTrainingCardLang } from "../../lang/training.card.lang";
import { Layout } from "types/layout.types";
import button from "./button";
import { ButtonProps } from "./program.cart.view";

class TrainingCartView {
  layout = {} as Layout;

  render(root: HTMLElement, training: Training, btnProps?: ButtonProps) {
    this.createLayout(root, training);
    if (btnProps) this.renderButton(training.id, btnProps);
  }

  createLayout(root: HTMLElement, { title, calories }: Training) {
    const { caloriesText } = getTrainingCardLang();

    this.layout.trainingCard = document.createElement("div");
    this.layout.trainingCard.className = "training-cart";

    this.layout.content = document.createElement("div");
    this.layout.content.className = "training-cart__content";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "training-cart__title title";
    this.layout.title.innerText = `${title}`;

    this.layout.desc = document.createElement("div");
    this.layout.desc.className = "training-cart__desc";
    this.layout.desc.innerHTML = `<span class="training-cart__text">${calories} ${caloriesText}</span>`;

    this.layout.button = document.createElement("div");
    this.layout.button.className = "training-cart__button";

    this.layout.icon = document.createElement("div");
    this.layout.icon.className = "icon-round icon-round--shadow";
    this.layout.icon.innerHTML = `<span class="icon icon--lowebody-training"></span>`;

    this.layout.content.append(
      this.layout.title,
      this.layout.desc,
      this.layout.button
    );

    this.layout.trainingCard.append(this.layout.content, this.layout.icon);

    root.append(this.layout.trainingCard);
  }

  renderButton(id: string, { text, classes, callback }: ButtonProps) {
    button.render(this.layout.button, classes, text, callback, id);
  }
}

export default new TrainingCartView();
