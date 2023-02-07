import button from "../components/button";
import authController from "../../controller/auth.controller";

class DashboardView {
  init(root: HTMLElement) {
    this.createLayout(root);
  }

  createLayout(root: HTMLElement) {
    const container = document.createElement("div");

    const onLogout = () => {
      authController.logout();
    };

    button.render(container, "button--colored", "Log-out", onLogout);

    root.replaceChildren(container);
  }
}

export default new DashboardView();
