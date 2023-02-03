import { Routing } from "types/route.types";
import NavigationView from "./navigation.view";

class NavigationLandingView extends NavigationView {
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
}

export default new NavigationLandingView();
