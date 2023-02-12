import { InputField } from "./input.field";

class PhoneFieldView extends InputField {
  init(root: HTMLElement, placeholder: string, value?: string) {
    const callbacks = [
      {
        event: "input",
        callback: (e: Event) => {
          if (e.target instanceof HTMLInputElement) {
            const target = e.target as HTMLInputElement;

            let temp = target.value;

            if (target.value.length) {
              temp = target.value.replace(/[-+\s.( )]/g, "");
              const chunks = temp.match(
                /(\d?)(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/
              )!;
              if (chunks[3]) {
                target.value =
                  "+" +
                  chunks[1] +
                  " (" +
                  chunks[2] +
                  ") " +
                  chunks[3] +
                  (chunks[4] ? "-" + chunks[4] : "") +
                  (chunks[5] ? "-" + chunks[5] : "");
              } else {
                target.value = "+" + chunks[1] + (chunks[2] ? chunks[2] : "");
              }
            }
          }
        }
      },
      {
        event: "focusout",
        callback: (e: Event) => {
          const phoneRegExp =
            /^(\+(\d{0,3})) (\((\d{0,3})\)) (\d{0,3})-(\d{0,2})-(\d{0,2})/gm;

          if (e.target instanceof HTMLInputElement) {
            this.removeErrorMessage(e.target);

            phoneRegExp.test(e.target.value)
              ? this.addCorrectMessage(e.target)
              : this.addErrorMessage(e.target);
          }
        }
      }
    ];

    const input = this.render(
      root,
      "phone-number",
      "phone",
      "text",
      "icon--call",
      placeholder,
      callbacks
    );

    if (value) input.value = value;
  }
}

export default new PhoneFieldView();
