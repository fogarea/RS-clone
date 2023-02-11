import navigationController from "controller/navigation.controller";
import { Routing } from "types/route.types";
import button from "../../components/button";
import { getBtnLandingLang } from "../../../lang/header/buttons.landing.lang";

class LoginButtonsView {
  render(root: HTMLElement) {
    const { btn } = getBtnLandingLang();

    const onSingIn = () =>
      navigationController.createRoute(Routing.AUTHORIZATION);

    const onSingUp = () =>
      navigationController.createRoute(Routing.REGISTRATION);

    if (btn) {
      button.render(root, "button--bordered", `${btn[0]}`, onSingIn);

      button.render(root, "button--colored", `${btn[1]}`, onSingUp);
    }
  }
}

export default new LoginButtonsView();
