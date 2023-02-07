import { InputField } from "./input.field";

class LastNameFieldView extends InputField {
  init(root: HTMLElement, placeholder: string) {
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

    this.render(
      root,
      "last-name",
      "surname",
      "text",
      "icon--profile",
      placeholder,
      callbacks
    );
  }
}

export default new LastNameFieldView();
