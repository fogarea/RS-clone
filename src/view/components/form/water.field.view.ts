import { InputField } from "./input.field";

class WaterFieldView extends InputField {
  init(
    root: HTMLElement,
    id: string,
    icon: string,
    name: string,
    placeholder: string,
    value?: string
  ) {
    const callbacks = [
      {
        event: "focusout",
        callback: (e: Event) => {
          if (e.target instanceof HTMLInputElement) {
            this.removeErrorMessage(e.target);

            const val = e.target.value;

            parseInt(val) > 0 && val.length < 5
              ? this.addCorrectMessage(e.target)
              : this.addErrorMessage(e.target);
          }
        }
      }
    ];

    const input = this.render(
      root,
      id,
      name,
      "number",
      icon,
      placeholder,
      callbacks
    );

    if (value) input.value = value;
  }
}

export default new WaterFieldView();
