import button from "../../components/button";
import navigationModel from "../../../model/navigation.model";
import { Routing } from "types/route.types";
import navigationController from "../../../controller/navigation.controller";

class GoalsButtonView {
  render(root: HTMLElement) {
    const onSingUp = () => {
      const route = navigationModel.createRoute(Routing.REGISTRATION);
      navigationController.applyRoute(route);
    };

    button.render(root, "button--bordered", "Sign Up Now", onSingUp);
  }
}

export default new GoalsButtonView();
