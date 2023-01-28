import { state } from "store/state";
import { Routing } from "types/route.types";

class NavigationView {
  render(root: HTMLElement) {
    const navigation = document.createElement("div");

    const link1 = document.createElement("a");
    link1.classList.add("navigation__link");
    link1.textContent = "hello";
    link1.href = state.basePath + Routing.HELLO;

    const link2 = document.createElement("a");
    link2.classList.add("navigation__link");
    link2.textContent = "counter";
    link2.href = state.basePath + Routing.COUNTER;

    const link3 = document.createElement("a");
    link3.classList.add("navigation__link");
    link3.textContent = "about";
    link3.href = state.basePath + Routing.ABOUT;

    navigation.append(link1, link2, link3);
    root.replaceChildren(navigation);
  }
}

export default new NavigationView();
