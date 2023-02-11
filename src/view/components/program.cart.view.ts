import { Program } from "types/program.types";
import button from "./button";
import { Layout } from "types/layout.types";

export type ButtonProps = {
  classes: string;
  text: string;
  callback?: (event: Event) => void;
};

class ProgramCartView {
  layout = {} as Layout;

  render(root: HTMLElement, program: Program, btnProps?: ButtonProps) {
    this.createLayout(root, program);
    if (btnProps) this.renderButton(program.id, btnProps);
  }

  createLayout(root: HTMLElement, { title, description, media }: Program) {
    this.layout.programCard = document.createElement("div");
    this.layout.programCard.className = "training";

    this.layout.img = document.createElement("div");
    this.layout.img.className = "training__img";
    this.layout.img.innerHTML = `<img src="${media}" alt="Training Image">`;

    this.layout.content = document.createElement("div");
    this.layout.content.className = "training__content";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "training__title";
    this.layout.title.innerText = `${title}`;

    this.layout.desc = document.createElement("p");
    this.layout.desc.className = "training__text";
    this.layout.desc.innerText = `${description}`;

    this.layout.button = document.createElement("div");
    this.layout.button.className = "training__button";

    this.layout.content.append(
      this.layout.title,
      this.layout.desc,
      this.layout.button
    );

    this.layout.programCard.append(this.layout.img, this.layout.content);

    root.append(this.layout.programCard);
  }

  renderButton(id: string, { text, classes, callback }: ButtonProps) {
    button.render(this.layout.button, classes, text, callback, id);
  }
}

export default new ProgramCartView();
