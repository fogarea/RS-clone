import { Layout } from "types/layout.types";
import authFormView from "./auth.form.view";
import redirectRegView from "./redirect.reg.view";
import authController from "../../controller/auth.controller";
import { getAuthLang } from "lang/auth.lang";
import formDataView from "../components/form.data.view";
import loading from "utils/loading";

class AuthView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    this.addHandler();
  }

  createLayout(root: HTMLElement) {
    const { greeting, title } = getAuthLang();

    this.layout = formDataView.createLayout(root, `${title}`, `${greeting}`);

    root.replaceChildren(this.layout.form);
  }

  render() {
    this.layout.submit = authFormView.render(this.layout.formFields);
    redirectRegView.init(this.layout.redirect);
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

        const auth = await authController.login({
          email: `${formData.email}`,
          password: `${formData.password}`
        });

        if (auth.error) {
          alert(
            `error: ${auth.error}\nmessage: ${auth.message}\ncode: ${auth.code}`
          );
          loading.off(this.layout.submit);
          return;
        }

        authController.redirectToHome();
      }
    });
  }
}

export default new AuthView();
