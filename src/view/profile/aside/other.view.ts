import { Layout } from "types/layout.types";
import button from "../../components/button";
import authController from "../../../controller/auth.controller";
import { getProfileOtherLang } from "lang/profile/other.profile.lang";
import navigationController from "../../../controller/navigation.controller";
import { Routing } from "types/route.types";
import modalDialogView from "../../components/modal/modal.dialog.view";
import { getExitLang } from "lang/profile/exit.lang";

class OtherView {
  layout = {} as Layout;

  render(root: HTMLElement) {
    this.createLayout(root);
    this.renderButton();
  }

  createLayout(root: HTMLElement) {
    const { title, text } = getProfileOtherLang();

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "other__wrapper cards__container";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "other__title title";
    this.layout.title.innerText = `${title}`;

    this.layout.content = document.createElement("div");
    this.layout.content.className = "other__content";

    this.layout.text = document.createElement("span");
    this.layout.text.className = "other__text";
    this.layout.text.innerText = `${text}`;

    this.layout.button = document.createElement("div");
    this.layout.button.className = "other__button";

    this.layout.content.append(this.layout.text, this.layout.button);

    this.layout.wrapper.append(this.layout.title, this.layout.content);

    root.replaceChildren(this.layout.wrapper);
  }

  renderButton() {
    const { btn } = getProfileOtherLang();
    const { title } = getExitLang();

    const onLogout = () => {
      authController.logout();
      navigationController.createRoute(Routing.MAIN);
    };
    const onDialog = () => {
      modalDialogView.buildModalDialog(`${title}`, () => {
        onLogout();
        modalDialogView.removeModal();
      });
    };

    button.render(this.layout.button, "button--rounded", `${btn}`, onDialog);
  }
}

export default new OtherView();
