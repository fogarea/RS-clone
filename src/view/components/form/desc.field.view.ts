import { InputField } from "./input.field";

class DescFieldView extends InputField {
  init(root: HTMLElement, placeholder: string, value?: string) {
    const input = this.render(
      root,
      "desc",
      "desc",
      "text",
      "icon--desc",
      placeholder
    );

    if (value) input.value = value;
  }
}

export default new DescFieldView();
