import navigationModel from "model/navigation.model";

class NavigationController {
  route(event: MouseEvent) {
    event.preventDefault();

    if (!(event.target instanceof HTMLElement)) return;
    const target: HTMLAnchorElement | null =
      event.target.closest(".navigation__link");

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
}

export default new NavigationController();
