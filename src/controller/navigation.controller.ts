import navigationModel from "model/navigation.model";
import { Routing } from "types/route.types";

class NavigationController {
  route(event: MouseEvent) {
    event.preventDefault();
    if (!(event.target instanceof HTMLElement)) return;

    let target = event.target.closest(".logo")
      ? (event.target.closest(".logo") as HTMLAnchorElement)
      : (event.target as HTMLAnchorElement);

    if (event.target.closest(".sign__icon")) {
      target = event.target.closest(".sign__icon") as HTMLAnchorElement;
    }

    if (!target) return;

    const route = target.href;

    if (event.ctrlKey) window.open(route);
    else this.applyRoute(route);
  }

  applyRoute(route: string) {
    window.history.pushState({}, "", route);
    navigationModel.emit("route.update");
  }

  handleRoute() {
    const restoreRoute = localStorage.getItem("restore.route");

    if (restoreRoute) {
      localStorage.removeItem("restore.route");
      this.applyRoute(restoreRoute);
    } else {
      navigationModel.emit("route.update");
    }
  }

  createRoute(path?: Routing) {
    const route = navigationModel.createRoute(path);
    this.applyRoute(route);
  }

  reRenderRoute() {
    navigationModel.emit("route.update");
  }
}

export default new NavigationController();
