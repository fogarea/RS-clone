export interface EventCallback {
  event: string;
  callback: (event: Event) => void;
}

export class InputField {
  render(
    root: HTMLElement,
    id: string,
    name: string,
    type: string,
    iconCls: string,
    placeholder: string,
    callbacks?: EventCallback[],
    min?: string,
    max?: string
  ) {
    const label = document.createElement("label");
    label.className = "form-fields__label";
    label.setAttribute("for", `${id}`);

    const icon = document.createElement("span");
    icon.className = `form-fields__icon icon ${iconCls}`;

    const input = document.createElement("input");
    input.className = "form-fields__input";
    input.name = `${name}`;
    input.type = `${type}`;
    input.placeholder = `${placeholder}`;
    input.autocomplete = "on";
    input.required = true;

    if (min && max) {
      input.min = min;
      input.max = max;
    }

    label.append(icon, input);

    if (callbacks) this.addHandlers(input, callbacks);

    root.append(label);

    return input;
  }

  addHandlers(input: HTMLInputElement, callbacks: EventCallback[]) {
    callbacks.forEach(({ event, callback }) => {
      input.addEventListener(event, (e: Event) => {
        callback(e);
      });
    });
  }

  addErrorMessage(target: HTMLInputElement) {
    target.style.borderColor = "red";
    target.classList.add("error");
  }

  removeErrorMessage(target: HTMLInputElement) {
    target.style.borderColor = "";
    target.classList.remove("error");
  }

  addCorrectMessage(target: HTMLInputElement) {
    target.style.borderColor = "green";
  }
}
