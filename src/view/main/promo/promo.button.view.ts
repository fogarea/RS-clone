import button from "../../components/button";
import navigationModel from "../../../model/navigation.model";
import { Routing } from "types/route.types";
import navigationController from "../../../controller/navigation.controller";

class PromoButtonView {
  render(root: HTMLElement) {
    const onSingUp = () => {
      const route = navigationModel.createRoute(Routing.REGISTRATION);
      navigationController.applyRoute(route);
    };

    button.render(root, "button--colored", "Join to our team", onSingUp);
  }
}

export default new PromoButtonView();
