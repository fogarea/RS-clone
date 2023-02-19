import { InputField } from "./input.field";

class TitleFieldView extends InputField {
  init(root: HTMLElement, placeholder: string, value?: string) {
    const input = this.render(
      root,
      "title",
      "title",
      "text",
      "icon--title",
      placeholder
    );

    if (value) input.value = value;
  }
}

export default new TitleFieldView();
