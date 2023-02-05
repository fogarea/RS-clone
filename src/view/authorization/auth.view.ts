import { Layout } from "types/layout.types";
import authFormView from "./auth.form.view";
import redirectRegView from "./redirect.reg.view";
import { HttpLoginRequest } from "types/http.request.types";
import authController from "../../controller/auth.controller";

class AuthView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    this.addHandler();
  }

  createLayout(root: HTMLElement) {
    this.layout.auth = document.createElement("section");
    this.layout.auth.className = "authorization";

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "wrapper authorization__wrapper";

    this.layout.content = document.createElement("div");
    this.layout.content.className = "authorization__content";

    this.layout.desc = document.createElement("div");
    this.layout.desc.className = "authorization__desc";

    this.layout.text = document.createElement("p");
    this.layout.text.className = "authorization__text";
    this.layout.text.innerText = "Hey there,";

    this.layout.textBold = document.createElement("p");
    this.layout.textBold.className = "authorization__text--bold";
    this.layout.textBold.innerText = "Welcome Back";

    this.layout.desc.append(this.layout.text, this.layout.textBold);

    this.layout.form = document.createElement("form");
    this.layout.form.className = "authorization__form reg-form";
    this.layout.form.id = "auth-form";

    this.layout.redirect = document.createElement("div");
    this.layout.redirect.className = "authorization__login";

    this.layout.content.append(
      this.layout.desc,
      this.layout.form,
      this.layout.redirect
    );

    this.layout.wrapper.append(this.layout.content);

    this.layout.auth.append(this.layout.wrapper);

    root.replaceChildren(this.layout.auth);
  }

  render() {
    authFormView.render(this.layout.form);
    redirectRegView.init(this.layout.redirect);
  }

  addHandler() {
    this.layout.form.addEventListener("submit", async (e: Event) => {
      e.preventDefault();

      const errors = document.querySelectorAll(".error");
      if (errors.length) return;

      if (e.target instanceof HTMLFormElement) {
        const form = e.target;
        const formData = Object.fromEntries(new FormData(form).entries());

        const request: HttpLoginRequest = {
          email: `${formData.email}`,
          password: `${formData.password}`
        };

        await authController.login(request);
      }
    });
  }
}

export default new AuthView();
