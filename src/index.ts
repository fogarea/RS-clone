import authController from "controller/auth.controller";
import navigationController from "controller/navigation.controller";
import authModel from "model/auth.model";
import navigationModel from "model/navigation.model";
import { Layout } from "types/layout.types";
import { Routing } from "types/route.types";
import authorizationView from "view/authorization/authorization.view";
import counterView from "view/counter/counter.view";
import headerView from "view/header/header.view";
import helloView from "view/hello/hello.view";
import mainView from "view/main/main.view";
import registrationView from "view/registration/registration.view";
import footerView from "./view/footer/footer.view";

class App {
  layout = {} as Layout;

  async init() {
    const root = document.querySelector("#root");

    if (!(root instanceof HTMLElement)) return;

    this.createLayout(root);
    await authController.autoLogin();
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

        case Routing.REGISTRATION:
          registrationView.init(this.layout.main);
          break;

        case Routing.AUTHORIZATION:
          authorizationView.init(this.layout.main);
          break;

        case Routing.DASHBOARD:
          helloView.init(this.layout.main);
          break;

        case Routing.WORKOUT:
          helloView.init(this.layout.main);
          break;

        case Routing.MEAL:
          helloView.init(this.layout.main);
          break;

        case Routing.PROGRESS:
          helloView.init(this.layout.main);
          break;

        case Routing.PROFILE:
          counterView.init(this.layout.main);
          break;

        default:
          console.log(404);
          break;
      }
    };
    window.addEventListener("popstate", routeCallback);
    navigationModel.on("route.update", routeCallback);
    authModel.on("auth.update", () => {
      routeCallback();
      this.render();
    });
    authModel.on("auth.update.header", () => {
      this.render();
    });
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
