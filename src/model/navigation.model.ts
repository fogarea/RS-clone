import { state } from "store/state";
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
    const [resource, parameter] = path.split("/");

    return {
      host: route.host,
      path,
      resource,
      parameter,
      href: route.href,
      origin: route.origin
    };
  }
}

export default new NavigationModel();
