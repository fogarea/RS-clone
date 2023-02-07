import { Layout } from "types/layout.types";
import registrationFormView from "./registration.form.view";
import redirectAuthView from "./redirect.auth.view";
import { HttpRegisterRequest } from "types/http.request.types";
import authController from "../../controller/auth.controller";
import { getRegLang } from "../../lang/reg.lang";

class RegistrationView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    this.addHandler();
  }

  createLayout(root: HTMLElement) {
    const { greeting, title } = getRegLang();

    this.layout.registration = document.createElement("section");
    this.layout.registration.className = "registration";

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "wrapper registration__wrapper";

    this.layout.content = document.createElement("div");
    this.layout.content.className = "registration__content";

    this.layout.desc = document.createElement("div");
    this.layout.desc.className = "registration__desc";

    this.layout.text = document.createElement("p");
    this.layout.text.className = "registration__text";
    this.layout.text.innerText = `${greeting}`;

    this.layout.textBold = document.createElement("p");
    this.layout.textBold.className = "registration__text--bold";
    this.layout.textBold.innerText = `${title}`;

    this.layout.desc.append(this.layout.text, this.layout.textBold);

    this.layout.form = document.createElement("form");
    this.layout.form.className = "registration__form reg-form";
    this.layout.form.id = "reg-form";

    this.layout.redirect = document.createElement("div");
    this.layout.redirect.className = "registration__login";

    this.layout.content.append(
      this.layout.desc,
      this.layout.form,
      this.layout.redirect
    );

    this.layout.wrapper.append(this.layout.content);

    this.layout.registration.append(this.layout.wrapper);

    root.replaceChildren(this.layout.registration);
  }

  render() {
    registrationFormView.render(this.layout.form);
    redirectAuthView.init(this.layout.redirect);
  }

  addHandler() {
    this.layout.form.addEventListener("submit", async (e: Event) => {
      e.preventDefault();

      const errors = document.querySelectorAll(".error");
      if (errors.length) return;

      if (e.target instanceof HTMLFormElement) {
        const form = e.target;
        const formData = Object.fromEntries(new FormData(form).entries());

        const request: HttpRegisterRequest = {
          name: `${formData.name}`,
          surname: `${formData.surname}`,
          phone: `${formData.phone}`,
          email: `${formData.email}`,
          password: `${formData.password}`
        };

        await authController.register(request);
      }
    });
  }
}

export default new RegistrationView();
