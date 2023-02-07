import { InputField } from "./input.field";

class NumberFieldView extends InputField {
  init(
    root: HTMLElement,
    id: string,
    icon: string,
    name: string,
    placeholder: string
  ) {
    const callbacks = [
      {
        event: "focusout",
        callback: (e: Event) => {
          if (e.target instanceof HTMLInputElement) {
            this.removeErrorMessage(e.target);

            const value = e.target.value;

            value.length > 1 && value.length < 4
              ? this.addCorrectMessage(e.target)
              : this.addErrorMessage(e.target);
          }
        }
      }
    ];

    this.render(root, id, name, "number", icon, placeholder, callbacks);
  }
}

export default new NumberFieldView();
