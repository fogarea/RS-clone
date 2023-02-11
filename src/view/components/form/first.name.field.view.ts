import { InputField } from "./input.field";

class FirstNameFieldView extends InputField {
  init(root: HTMLElement, placeholder: string, value?: string) {
    const callbacks = [
      {
        event: "input",
        callback: (e: Event) => {
          const charsRegExp = /[^A-Za-zА-Яа-я\s]/g;
          if (e.target instanceof HTMLInputElement) {
            e.target.value = e.target.value.replace(charsRegExp, "");
          }
        }
      },
      {
        event: "focusout",
        callback: (e: Event) => {
          const nameLengthRegExp = /(\w{2})/;

          if (e.target instanceof HTMLInputElement) {
            this.removeErrorMessage(e.target);

            nameLengthRegExp.test(e.target.value)
              ? this.addCorrectMessage(e.target)
              : this.addErrorMessage(e.target);
          }
        }
      }
    ];

    const input = this.render(
      root,
      "first-name",
      "name",
      "text",
      "icon--profile",
      placeholder,
      callbacks
    );

    if (value) input.value = value;
  }
}

export default new FirstNameFieldView();
