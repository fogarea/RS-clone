import navigationModel from "model/navigation.model";
import { Routing } from "types/route.types";

class NavigationController {
  route(event: Event) {
    event.preventDefault();
    if (!(event.target instanceof HTMLElement)) return;

    const target = event.target.closest(".logo")
      ? (event.target.closest(".logo") as HTMLAnchorElement)
      : (event.target as HTMLAnchorElement);

    if (!target) return;

    const route = target.href;

    this.applyRoute(route);
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
