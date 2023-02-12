import { Layout } from "types/layout.types";
import registrationFormView from "./registration.form.view";
import redirectAuthView from "./redirect.auth.view";
import authController from "../../controller/auth.controller";
import { getRegLang } from "../../lang/reg/reg.lang";
import formDataView from "../components/form.data.view";

class RegistrationView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    this.addHandler();
  }

  createLayout(root: HTMLElement) {
    const { greeting, title } = getRegLang();

    this.layout = formDataView.createLayout(root, `${title}`, `${greeting}`);
  }

  render() {
    registrationFormView.render(this.layout.formFields);
    redirectAuthView.init(this.layout.redirect);
  }

  addHandler() {
    this.layout.formFields.addEventListener("submit", async (e: Event) => {
      e.preventDefault();

      const errors = document.querySelectorAll(".error");
      if (errors.length) return;

      if (e.target instanceof HTMLFormElement) {
        const form = e.target;
        const formData = Object.fromEntries(new FormData(form).entries());

        await authController.register({
          name: `${formData.name}`,
          surname: `${formData.surname}`,
          phone: `${formData.phone}`,
          email: `${formData.email}`,
          password: `${formData.password}`
        });
      }
    });
  }
}

export default new RegistrationView();
