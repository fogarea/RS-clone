import navigationController from "controller/navigation.controller";
import navigationModel from "model/navigation.model";
import { Routing } from "types/route.types";
import button from "../../components/button";
import { getBtnAppLang } from "../../../lang/header/button.app.lang";

class ProfileButtonsView {
  render(root: HTMLElement) {
    const { btn } = getBtnAppLang();

    const onProfile = () => {
      const route = navigationModel.createRoute(Routing.PROFILE);
      navigationController.applyRoute(route);
    };

    button.render(root, "button--colored", `${btn}`, onProfile);
  }
}

export default new ProfileButtonsView();
