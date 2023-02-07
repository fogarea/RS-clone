import { Routing } from "types/route.types";
import NavigationView from "./navigation.view";
import { getNavAppLang } from "../../../lang/header/navigation.app.lang";

const routes = [
  Routing.DASHBOARD,
  Routing.WORKOUT,
  Routing.MEAL,
  Routing.PROGRESS
];

class NavigationAppView extends NavigationView {
  render(root: HTMLElement) {
    const { navItem } = getNavAppLang();

    const navListApp = document.createElement("ul");
    navListApp.className = "nav__list";

    if (navItem) {
      for (let i = 0; i < navItem.length; i++) {
        navListApp.append(this.generateNavItem(navItem[i], routes[i]));
      }
    }

    root.replaceChildren(navListApp);
  }
}

export default new NavigationAppView();
