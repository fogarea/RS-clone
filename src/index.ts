import authController from "controller/auth.controller";
import navigationController from "controller/navigation.controller";
import authModel from "model/auth.model";
import navigationModel from "model/navigation.model";
import { Layout } from "types/layout.types";
import { Routing } from "types/route.types";
import authorizationView from "view/authorization/auth.view";
import dashboardView from "view/dashboard/dashboard.view";
import headerView from "view/header/header.view";
import programsView from "view/programs/programs.view";
import mainView from "view/landing/landing.view";
import footerView from "./view/footer/footer.view";
import aboutView from "./view/about/about.view";
import lang from "./lang/lang";
import completeView from "./view/registration/complete/complete.view";
import registrationView from "./view/registration/registration.view";
import preloaderUtils from "utils/preloader.utils";
import coverView from "view/cover/cover.view";
import programsController from "controller/programs.controller";
import profileController from "controller/profile.controller";
import profileWrapperView from "./view/profile/profile.wrapper.view";
import editProfileView from "./view/profile/edit/profile/edit.profile.view";
import editProfileDetailsView from "./view/profile/edit/details/edit.profile.details.view";
import goalsView from "./view/goals/goals.view";

class App {
  layout = {} as Layout;

  async init() {
    const root = document.querySelector("#root");

    if (!(root instanceof HTMLElement)) return;
    lang.init();

    preloaderUtils.init(root);
    await programsController.getAll();
    this.createLayout(root);
    await authController.autoLogin();
    this.render();
    this.subscribe();

    navigationController.handleRoute();
  }

  subscribe() {
    const routeCallback = () => {
      if (!profileController.isCompletedReg) {
        completeView.init(this.layout.main);
        return;
      }

      if (!profileController.isSelectedProgram) {
        programsView.init(this.layout.main);
        return;
      }

      switch (navigationModel.route.path) {
        case Routing.PROGRAMS:
          programsView.init(this.layout.main);
          break;

        case Routing.ABOUT:
          aboutView.init(this.layout.main);
          break;

        case "":
        case Routing.LANDING:
          mainView.init(this.layout.main);
          break;

        case Routing.REGISTRATION:
          registrationView.init(this.layout.main);
          break;

        case Routing.AUTHORIZATION:
          authorizationView.init(this.layout.main);
          break;

        case Routing.COMPLETE:
          completeView.init(this.layout.main);
          break;

        case Routing.DASHBOARD:
          dashboardView.init(this.layout.main);
          break;

        case Routing.WORKOUT:
          dashboardView.init(this.layout.main);
          break;

        case Routing.MEAL:
          dashboardView.init(this.layout.main);
          break;

        case Routing.PROGRESS:
          coverView.init(this.layout.main);
          break;

        case Routing.PROFILE:
          profileWrapperView.init(this.layout.main);
          break;

        case Routing.EDIT_PROFILE:
          editProfileView.init(this.layout.main);
          break;

        case Routing.EDIT_DETAILS:
          editProfileDetailsView.init(this.layout.main);
          break;

        case Routing.GOALS:
          goalsView.init(this.layout.main);
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
