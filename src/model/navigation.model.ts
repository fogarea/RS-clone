import { state } from "store/state";
import { Routing } from "types/route.types";
import EventEmitter from "utils/observer.utils";

class NavigationModel extends EventEmitter {
  constructor() {
    super();

    state.basePath =
      this.route.host.indexOf("github.io") === -1 ? "/" : "/RS-clone/";
  }

  get route() {
    const route = new URL(window.location.href);
    const path = route.pathname.replace(state.basePath, "");
    const [resource, parameter, category] = path.split("/");

    return {
      protocol: route.protocol + `//`,
      host: route.host,
      path,
      resource,
      category,
      parameter,
      href: route.href,
      origin: route.origin
    };
  }

  createRoute(path?: Routing) {
    return (
      this.route.protocol +
      this.route.host +
      state.basePath +
      (path ? path : "")
    );
  }
}

export default new NavigationModel();
