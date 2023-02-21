import { Training } from "types/training.types";
import { getTrainingCardLang } from "lang/training.card.lang";
import { Layout } from "types/layout.types";
import button from "./button";
import { ButtonProps } from "./program.cart.view";

class TrainingCartView {
  layout = {} as Layout;

  render(root: HTMLElement, training: Training, btnProps?: ButtonProps) {
    this.createLayout(root, training);
    this.renderTags(training);
    if (btnProps) this.renderButton(training.id, btnProps);
  }

  createLayout(root: HTMLElement, { title, calories, icon }: Training) {
    const { caloriesText } = getTrainingCardLang();

    this.layout.trainingCard = document.createElement("div");
    this.layout.trainingCard.className = "training-cart";

    this.layout.content = document.createElement("div");
    this.layout.content.className = "training-cart__content";

    this.layout.title = document.createElement("p");
    this.layout.title.className = "training-cart__title";
    this.layout.title.innerText = `${title}`;

    this.layout.tags = document.createElement("div");
    this.layout.tags.className = "training-cart__tags tags";

    this.layout.tags.innerHTML = `<span class="tag tag--bordered">${calories} ${caloriesText}</span>`;

    this.layout.button = document.createElement("div");
    this.layout.button.className = "training-cart__button";

    this.layout.icon = document.createElement("div");
    this.layout.icon.className = "icon-round icon-round--shadow";
    this.layout.icon.innerHTML = `<span class="icon icon--${icon}"></span>`;

    this.layout.content.append(
      this.layout.title,
      this.layout.tags,
      this.layout.button
    );

    this.layout.trainingCard.append(this.layout.content, this.layout.icon);

    root.append(this.layout.trainingCard);
  }

  renderTags({ tag }: Training) {
    tag.forEach(
      (text) =>
        (this.layout.tags.innerHTML += `<span class="tag tag--bordered">${text}</span>`)
    );
  }

  renderButton(id: string, { text, classes, callback }: ButtonProps) {
    button.render(this.layout.button, classes, text, callback, id);
  }
}

export default new TrainingCartView();
