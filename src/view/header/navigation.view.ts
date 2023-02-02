import { state } from "store/state";
import { Routing } from "types/route.types";

class NavigationView {
  render(root: HTMLElement) {
    const navList = document.createElement("ul");
    navList.className = "nav__list";

    navList.append(
      this.generateNavItem("Main", ""),
      this.generateNavItem("Trainings", Routing.TRAININGS),
      this.generateNavItem("Contacts", Routing.CONTACTS)
    );

    root.replaceChildren(navList);
  }

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

export default new NavigationView();
