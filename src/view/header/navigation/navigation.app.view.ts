import { Routing } from "types/route.types";
import NavigationView from "./navigation.view";
import { getNavAppLang } from "lang/header/navigation.app.lang";

const routes = [
  Routing.DASHBOARD,
  Routing.WORKOUT,
  Routing.MEALS,
  Routing.MEDITATIONS
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

    navListApp
      .querySelector(".nav__item--link")
      ?.classList.add("nav__item--active");

    root.append(navListApp);
  }
}

export default new NavigationAppView();
