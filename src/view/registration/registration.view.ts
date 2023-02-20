import { Layout } from "types/layout.types";
import registrationFormView from "./registration.form.view";
import redirectAuthView from "./redirect.auth.view";
import authController from "../../controller/auth.controller";
import { getRegLang } from "lang/reg/reg.lang";
import formDataView from "../components/form.data.view";
import loading from "utils/loading";

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
    this.layout.submit = registrationFormView.render(this.layout.formFields);
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

        loading.on(this.layout.submit);

        const register = await authController.register({
          name: `${formData.name}`,
          surname: `${formData.surname}`,
          phone: `${formData.phone}`,
          email: `${formData.email}`,
          password: `${formData.password}`
        });

        if (register.error) {
          alert(
            `error: ${register.error}\nmessage: ${register.message}\ncode: ${register.code}`
          );
          loading.off(this.layout.submit);
          return;
        }
      }
    });
  }
}

export default new RegistrationView();
