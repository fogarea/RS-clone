import navigationController from "controller/navigation.controller";
import navigationModel from "model/navigation.model";
import { Routing } from "types/route.types";
import button from "../../components/button";

class LoginButtonsView {
  render(root: HTMLElement) {
    const onSingIn = () => {
      const route = navigationModel.createRoute(Routing.AUTHORIZATION);
      navigationController.applyRoute(route);
    };

    const onSingUp = () => {
      const route = navigationModel.createRoute(Routing.REGISTRATION);
      navigationController.applyRoute(route);
    };

    button.render(root, "button--bordered", "Sign In", onSingIn);

    button.render(root, "button--colored", "Sign Up", onSingUp);
  }
}

export default new LoginButtonsView();
