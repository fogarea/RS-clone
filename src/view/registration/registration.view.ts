import button from "view/components/button";
import { HttpRegisterRequest } from "types/http.request.types";
import authController from "controller/auth.controller";

class RegistrationView {
  init(root: HTMLElement) {
    this.render(root);
  }

  render(root: HTMLElement) {
    const container = document.createElement("div");

    const onRegister = async () => {
      const request: HttpRegisterRequest = {
        login: "sam6_frontend",
        password: "qwerty",
        gender: "female"
      };
      await authController.register(request);
    };

    button.render(container, "button--colored", "Register", onRegister);
    root.replaceChildren(container);
  }
}

export default new RegistrationView();
