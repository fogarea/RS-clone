import { state } from "store/state";
import { Routing } from "types/route.types";

export default class NavigationView {
  generateNavItem(text: string, route: Routing | "") {
    const navItem = document.createElement("li");
    navItem.className = "nav__item";

    const navItemLink = document.createElement("a");
    navItemLink.textContent = text;
    navItemLink.href = state.basePath + route;

    navItem.append(navItemLink);

    return navItem;
  }
}
