import button from "../components/button";
import authController from "../../controller/auth.controller";
import navigationController from "../../controller/navigation.controller";
import { Routing } from "types/route.types";

class DashboardView {
  init(root: HTMLElement) {
    this.createLayout(root);
  }

  createLayout(root: HTMLElement) {
    const container = document.createElement("div");

    const onLogout = () => {
      authController.logout();
      navigationController.createRoute(Routing.LANDING);
    };

    button.render(container, "button--colored", "Log-out", onLogout);

    root.replaceChildren(container);
  }
}

export default new DashboardView();
