import { Routing } from "types/route.types";
import NavigationView from "./navigation.view";
import { getNavLandingLang } from "lang/header/navigation.landing.lang";

const routes = [Routing.MAIN, Routing.PROGRAMS, Routing.ABOUT];

class NavigationLandingView extends NavigationView {
  render(root: HTMLElement) {
    const { navItem } = getNavLandingLang();

    const navListLanding = document.createElement("ul");
    navListLanding.className = "nav__list";

    if (navItem) {
      for (let i = 0; i < navItem.length; i++) {
        navListLanding.append(this.generateNavItem(navItem[i], routes[i]));
      }
    }

    navListLanding
      .querySelector(".nav__item--link")
      ?.classList.add("nav__item--active");

    root.replaceChildren(navListLanding);
  }
}

export default new NavigationLandingView();
