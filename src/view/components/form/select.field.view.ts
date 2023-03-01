import { InputField } from "./input.field";

class SelectFieldView extends InputField {
  init(
    root: HTMLElement,
    placeholder: string,
    options: string[],
    value?: string
  ) {
    this.createLayout(root, placeholder, options, value);
  }

  createLayout(
    root: HTMLElement,
    placeholder: string,
    options: string[],
    value?: string
  ) {
    const label = document.createElement("label");
    label.className = "form-fields__label";
    label.setAttribute("for", `select`);

    const icon = document.createElement("span");
    icon.className = `form-fields__icon icon icon--gender`;

    const select = document.createElement("select");
    select.className = "form-fields__input";
    select.name = `gender`;
    select.value = `${placeholder}`;
    select.required = true;

    const placeholderOption = document.createElement("option");
    placeholderOption.value = ``;
    placeholderOption.innerText = `${placeholder}`;
    placeholderOption.disabled = true;

    select.append(placeholderOption);

    options.forEach((text) => {
      const option = document.createElement("option");
      option.innerText = text;

      switch (text[0]) {
        case "М":
          option.value = "male";
          break;

        case "M":
          option.value = "male";
          break;

        case "Ж":
          option.value = "female";
          break;

        case "F":
          option.value = "female";
          break;

        default:
          break;
      }

      if (value && option.value === value) {
        option.selected = true;
      }

      select.append(option);
    });

    if (!value) placeholderOption.selected = true;

    label.append(icon, select);

    root.append(label);
  }
}

export default new SelectFieldView();
