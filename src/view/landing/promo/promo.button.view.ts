import button from "../../components/button";
import { Routing } from "types/route.types";
import navigationController from "../../../controller/navigation.controller";
import { getPromoLang } from "../../../lang/landing/promo.lang";

class PromoButtonView {
  render(root: HTMLElement) {
    const onSingUp = () =>
      navigationController.createRoute(Routing.REGISTRATION);

    const { btn } = getPromoLang();

    button.render(root, "button--colored", `${btn}`, onSingUp);
  }
}

export default new PromoButtonView();
