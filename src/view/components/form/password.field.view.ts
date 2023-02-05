import { InputField } from "./input.field";

class PasswordFieldView extends InputField {
  init(root: HTMLElement, id: string) {
    const callback = [
      {
        event: "focusout",
        callback: (e: Event) => {
          if (e.target instanceof HTMLInputElement) {
            const length = e.target.value.length;
            this.removeErrorMessage(e.target);

            length > 2 && length < 16
              ? this.addCorrectMessage(e.target)
              : this.addErrorMessage(e.target);
          }
        }
      }
    ];

    this.render(
      root,
      id,
      "password",
      "password",
      "icon--lock",
      "Password",
      callback
    );
  }
}

export default new PasswordFieldView();
