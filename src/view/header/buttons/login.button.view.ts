import navigationController from "controller/navigation.controller";
import navigationModel from "model/navigation.model";
import { Routing } from "types/route.types";
import button from "../../components/button";
import { getBtnLandingLang } from "../../../lang/header/buttons.landing.lang";

class LoginButtonsView {
  render(root: HTMLElement) {
    const { btn } = getBtnLandingLang();

    const onSingIn = () => {
      const route = navigationModel.createRoute(Routing.AUTHORIZATION);
      navigationController.applyRoute(route);
    };

    const onSingUp = () => {
      const route = navigationModel.createRoute(Routing.REGISTRATION);
      navigationController.applyRoute(route);
    };

    if (btn) {
      button.render(root, "button--bordered", `${btn[0]}`, onSingIn);

      button.render(root, "button--colored", `${btn[1]}`, onSingUp);
    }
  }
}

export default new LoginButtonsView();
