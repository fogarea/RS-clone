import { InputField } from "./input.field";

class EmailFieldView extends InputField {
  init(root: HTMLElement, id: string, placeholder: string) {
    const callback = [
      {
        event: "focusout",
        callback: (e: Event) => {
          const emailRegExp =
            /^[\w-.a-z0-9!#$%&'*+/=?~^_`{|}]+@([\w-]+\.)+[\w-]{2,4}$/;

          if (e.target instanceof HTMLInputElement) {
            this.removeErrorMessage(e.target);

            emailRegExp.test(e.target.value)
              ? this.addCorrectMessage(e.target)
              : this.addErrorMessage(e.target);
          }
        }
      }
    ];

    this.render(
      root,
      id,
      "email",
      "email",
      "icon--message",
      placeholder,
      callback
    );
  }
}

export default new EmailFieldView();
