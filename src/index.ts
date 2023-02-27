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
import programsController from "controller/programs.controller";
import profileController from "controller/profile.controller";
import profileWrapperView from "./view/profile/profile.wrapper.view";
import editProfileView from "./view/profile/edit/profile/edit.profile.view";
import editProfileDetailsView from "./view/profile/edit/details/edit.profile.details.view";
import workoutView from "view/workouts/workouts.view";
import trainingView from "view/workouts/training.view";
import mealsView from "./view/meals/meals.view";
import mealsController from "./controller/meals.controller";
import mealView from "./view/meals/meal.view";
import { Meals } from "types/meal.types";
import meditationsView from "view/meditations/main/meditations.view";
import meditationView from "view/meditations/single/meditation.view";
import meditationController from "controller/meditation.controller";
import addTracksView from "./view/meditations/single/add.tracks.view";
import { state } from "./store/state";

class App {
  layout = {} as Layout;

  async init() {
    const root = document.querySelector("#root");

    if (!(root instanceof HTMLElement)) return;

    lang.init();

    preloaderUtils.init(root);

    await Promise.allSettled([
      programsController.getAll(),
      mealsController.getAll(),
      meditationController.getTracks(),
      authController.autoLogin()
    ]);

    this.createLayout(root);

    authController.updateLoaded();

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

      const { category, parameter } = navigationModel.route;

      headerView.toggleActiveLink(navigationModel.route.resource);

      switch (navigationModel.route.resource) {
        case Routing.PROGRAMS:
          programsView.init(this.layout.main);
          break;

        case Routing.ABOUT:
          this.withUnAuth(() => aboutView.init(this.layout.main));
          break;

        case "":
        case Routing.MAIN:
          state.user.authorized
            ? dashboardView.init(this.layout.main)
            : mainView.init(this.layout.main);
          break;

        case Routing.REGISTRATION:
          this.withUnAuth(() => registrationView.init(this.layout.main));
          break;

        case Routing.AUTHORIZATION:
          this.withUnAuth(() => authorizationView.init(this.layout.main));
          break;

        case Routing.COMPLETE:
          this.withUnAuth(() => completeView.init(this.layout.main));
          break;

        case Routing.WORKOUT:
          if (parameter)
            this.withAuth(() => trainingView.init(this.layout.main, parameter));
          else this.withAuth(() => workoutView.init(this.layout.main));
          break;

        case Routing.MEALS:
          if (parameter)
            this.withAuth(() =>
              mealView.init(
                this.layout.main,
                parameter as keyof Meals,
                category
              )
            );
          else this.withAuth(() => mealsView.init(this.layout.main));
          break;

        case Routing.MEDITATIONS:
          if (category && parameter)
            this.withAuth(() =>
              addTracksView.init(this.layout.main, parameter)
            );

          if (!category && parameter)
            this.withAuth(() =>
              meditationView.init(this.layout.main, parameter)
            );

          if (!category && !parameter)
            this.withAuth(() => meditationsView.init(this.layout.main));

          break;

        case Routing.PROFILE:
          this.withAuth(() => profileWrapperView.init(this.layout.main));
          break;

        case Routing.EDIT_PROFILE:
          this.withAuth(() => editProfileView.init(this.layout.main));
          break;

        case Routing.EDIT_DETAILS:
          this.withAuth(() => editProfileDetailsView.init(this.layout.main));
          break;

        default:
          console.log(404);
          break;
      }

      window.scrollTo(0, 0);
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

  withAuth(routeCallback: () => void) {
    if (state.user.authorized) routeCallback();
    else navigationController.createRoute(Routing.MAIN);
  }

  withUnAuth(routeCallback: () => void) {
    if (!state.user.authorized) routeCallback();
    else navigationController.createRoute(Routing.MAIN);
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
