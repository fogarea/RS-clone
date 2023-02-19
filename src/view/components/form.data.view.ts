import { Layout } from "types/layout.types";

class FormDataView {
  layout = {} as Layout;

  createLayout(root: HTMLElement, title: string, text: string) {
    this.layout.form = document.createElement("section");
    this.layout.form.className = "form";

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "wrapper form__wrapper";

    this.layout.content = document.createElement("div");
    this.layout.content.className = "form__content cards__container";

    this.layout.desc = document.createElement("div");
    this.layout.desc.className = "form__desc";

    this.layout.text = document.createElement("p");
    this.layout.text.className = "form__text";
    this.layout.text.innerText = text;

    this.layout.textBold = document.createElement("p");
    this.layout.textBold.className = "form__text--bold";
    this.layout.textBold.innerText = title;

    this.layout.desc.append(this.layout.text, this.layout.textBold);

    this.layout.formFields = document.createElement("form");
    this.layout.formFields.className = "form__fields form-fields";
    this.layout.formFields.id = "form-fields";

    this.layout.redirect = document.createElement("div");
    this.layout.redirect.className = "form__login";

    this.layout.content.append(
      this.layout.desc,
      this.layout.formFields,
      this.layout.redirect
    );

    this.layout.wrapper.append(this.layout.content);

    this.layout.form.append(this.layout.wrapper);

    root.replaceChildren(this.layout.form);

    return this.layout;
  }
}

export default new FormDataView();
