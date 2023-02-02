import navigationController from "controller/navigation.controller";
import navigationModel from "model/navigation.model";
import { Layout } from "types/layout.types";
import { Routing } from "types/route.types";
import counterView from "view/counter/counter.view";
import headerView from "view/header/header.view";
import helloView from "view/hello/hello.view";
import mainView from "view/main/main.view";
import footerView from "./view/footer/footer.view";

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
        case Routing.TRAININGS:
          helloView.init(this.layout.main);
          break;

        case Routing.CONTACTS:
          counterView.init(this.layout.main);
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
    this.layout.main.classList.add("main");

    this.layout.footer = document.createElement("footer");
    this.layout.footer.classList.add("footer");

    root.append(this.layout.header, this.layout.main, this.layout.footer);
  }

  render() {
    headerView.init(this.layout.header);
    footerView.init(this.layout.footer);
  }
}

new App().init();
