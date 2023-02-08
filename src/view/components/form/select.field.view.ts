import { InputField } from "./input.field";

class SelectFieldView extends InputField {
  init(root: HTMLElement, placeholder: string, options: string[]) {
    this.createLayout(root, placeholder, options);
  }

  createLayout(root: HTMLElement, placeholder: string, options: string[]) {
    const label = document.createElement("label");
    label.className = "reg-form__label";
    label.setAttribute("for", `select`);

    const icon = document.createElement("span");
    icon.className = `reg-form__icon icon icon--gender`;

    const select = document.createElement("select");
    select.className = "reg-form__input";
    select.name = `gender`;
    select.value = `${placeholder}`;
    select.required = true;

    const placeholderOption = document.createElement("option");
    placeholderOption.value = ``;
    placeholderOption.innerText = `${placeholder}`;
    placeholderOption.disabled = true;
    placeholderOption.selected = true;

    select.append(placeholderOption);

    options.forEach((text) => {
      const option = document.createElement("option");
      option.value = text;
      option.innerText = text;

      select.append(option);
    });

    label.append(icon, select);

    root.append(label);
  }
}

export default new SelectFieldView();
