import button from "view/components/button";
import testController from "controller/test.controller";
import authController from "controller/auth.controller";

class AuthorizationView {
  init(root: HTMLElement) {
    this.render(root);
  }

  render(root: HTMLElement) {
    const container = document.createElement("div");

    const onLogin = async () => {
      const request = {
        login: "sam_frontend",
        password: "qwerty"
      };

      await authController.login(request);
    };

    const onTest = async () => {
      const request = {
        title: "test auth 1",
        content: "tets auth 1"
      };

      await testController.test(request);
    };

    const onLogout = () => {
      authController.logout();
    };

    button.render(container, "button--colored", "Authorization", onLogin);
    button.render(container, "button--colored", "Test", onTest);
    button.render(container, "button--colored", "Log-out", onLogout);
    root.replaceChildren(container);
  }
}

export default new AuthorizationView();
