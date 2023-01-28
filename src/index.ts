import navigationController from "controller/navigation.controller";
import navigationModel from "model/navigation.model";
import { Layout } from "types/layout.types";
import { Routing } from "types/route.types";
import aboutView from "view/about/about.view";
import counterView from "view/counter/counter.view";
import headerView from "view/header/header.view";
import helloView from "view/hello/hello.view";
import mainView from "view/main/main.view";

class App {
  layout = {} as Layout;

  init() {
    const root = document.querySelector("#root");
    if (!(root instanceof HTMLElement)) return;
    this.createLayout(root);
    this.render();
    this.subscribe();
    navigationController.handleRoute();
  }

  subscribe() {
    const routeCallback = () => {
      switch (navigationModel.route.path) {
        case Routing.HELLO:
          helloView.init(this.layout.main);
          break;

        case Routing.COUNTER:
          counterView.init(this.layout.main);
          break;

        case Routing.ABOUT:
          aboutView.init(this.layout.main);
          break;

        case "":
        case Routing.MAIN:
          mainView.init(this.layout.main);
          break;

        default:
          console.log(404);
          break;
      }
    };
    window.addEventListener("popstate", routeCallback);
    navigationModel.on("route.update", routeCallback);
  }

  createLayout(root: HTMLElement) {
    this.layout.header = document.createElement("header");
    this.layout.header.classList.add("header");
    this.layout.main = document.createElement("main");

    root.append(this.layout.header, this.layout.main);
  }

  render() {
    headerView.init(this.layout.header);
  }
}

new App().init();
