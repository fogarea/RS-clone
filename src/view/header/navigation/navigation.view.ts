import { state } from "store/state";

export default class NavigationView {
  generateNavItem(text: string, route: string) {
    const navItem = document.createElement("li");
    navItem.className = "nav__item";

    const navItemLink = document.createElement("a");
    navItemLink.className = "nav__item--link";
    navItemLink.textContent = text;
    navItemLink.id = route;
    navItemLink.href = state.basePath + route;

    navItem.append(navItemLink);

    return navItem;
  }
}
