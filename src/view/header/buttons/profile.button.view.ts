import navigationController from "controller/navigation.controller";
import { Routing } from "types/route.types";
import button from "../../components/button";
import { getBtnAppLang } from "../../../lang/header/button.app.lang";

class ProfileButtonsView {
  render(root: HTMLElement) {
    const { btn } = getBtnAppLang();

    const onProfile = () => navigationController.createRoute(Routing.PROFILE);

    button.render(root, "button--colored", `${btn}`, onProfile);
  }
}

export default new ProfileButtonsView();
