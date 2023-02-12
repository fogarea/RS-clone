import { InputField } from "./input.field";

class DateFieldView extends InputField {
  init(root: HTMLElement, placeholder: string, value?: string) {
    const callbacks = [
      {
        event: "focus",
        callback: (e: Event) => {
          const target = e.target as HTMLInputElement;
          target.type = "date";
        }
      }
    ];

    const input = this.render(
      root,
      "date",
      "birthday",
      "text",
      "icon--date",
      placeholder,
      callbacks,
      "1900-01-01",
      "2023-01-01"
    );

    if (value) input.value = value;
  }
}

export default new DateFieldView();
