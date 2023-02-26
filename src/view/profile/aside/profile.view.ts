import { state } from "../../../store/state";
import profileController from "../../../controller/profile.controller";
import button from "../../components/button";
import { Layout } from "types/layout.types";
import { getProfileLang } from "lang/profile/profile.lang";
import navigationController from "../../../controller/navigation.controller";
import { Routing } from "types/route.types";
import { MediaEndpoint } from "types/media.endpoint.types";

class ProfileView {
  layout = {} as Layout;

  render(root: HTMLElement) {
    this.createLayout(root);
    this.renderButton();
  }

  createLayout(root: HTMLElement) {
    const { program } = getProfileLang();
    const { name, surname, avatar } = state.user;

    const avatarLink = `${
      MediaEndpoint.PROFILE
    }/${state.user.profile.gender.toLowerCase()}/${avatar}.svg`;

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "profile__wrapper cards__container";

    this.layout.content = document.createElement("div");
    this.layout.content.className = "profile__content";

    this.layout.img = document.createElement("div");
    this.layout.img.className = "profile__img";
    this.layout.img.innerHTML = `<img src="${avatarLink}" alt="Profile Picture">`;

    this.layout.info = document.createElement("div");
    this.layout.info.className = "profile__content";

    this.layout.title = document.createElement("h2");
    this.layout.title.className = "profile__title title";
    this.layout.title.innerText = `${name} ${surname}`;

    this.layout.program = document.createElement("span");
    this.layout.program.className = "profile__program";
    this.layout.program.innerText = `${
      profileController.program ? profileController.program.title : ""
    } ${program} `;

    this.layout.button = document.createElement("div");
    this.layout.button.className = "profile__edit-btn";

    this.layout.info.append(this.layout.title, this.layout.program);

    this.layout.content.append(
      this.layout.img,
      this.layout.info,
      this.layout.button
    );

    this.layout.wrapper.append(this.layout.content);

    root.replaceChildren(this.layout.wrapper);
  }

  renderButton() {
    const { btn } = getProfileLang();
    const onEdit = () => navigationController.createRoute(Routing.EDIT_PROFILE);

    button.render(this.layout.button, "button--rounded", `${btn}`, onEdit);
  }
}

export default new ProfileView();
