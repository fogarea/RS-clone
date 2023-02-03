import navigationController from "controller/navigation.controller";
import navigationModel from "model/navigation.model";
import { Routing } from "types/route.types";
import button from "../../components/button";

class ProfileButtonsView {
  render(root: HTMLElement) {
    const onProfile = () => {
      const route = navigationModel.createRoute(Routing.PROFILE);
      navigationController.applyRoute(route);
    };

    button.render(root, "button--colored", "Profile", onProfile);
  }
}

export default new ProfileButtonsView();
