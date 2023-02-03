import { Routing } from "types/route.types";
import NavigationView from "./navigation.view";

class NavigationAppView extends NavigationView {
  render(root: HTMLElement) {
    const navList = document.createElement("ul");
    navList.className = "nav__list";

    navList.append(
      this.generateNavItem("Dashboard", Routing.DASHBOARD),
      this.generateNavItem("Workout", Routing.WORKOUT),
      this.generateNavItem("Meal", Routing.MEAL),
      this.generateNavItem("Progress", Routing.PROGRESS)
    );

    root.replaceChildren(navList);
  }
}

export default new NavigationAppView();
