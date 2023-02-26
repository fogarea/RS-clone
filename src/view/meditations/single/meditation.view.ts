import meditationController from "controller/meditation.controller";
import navigationController from "controller/navigation.controller";
import { getMeditationsLang } from "lang/meditation/meditations.lang";
import { Layout } from "types/layout.types";
import { Meditation } from "types/meditation.types";
import { Routing } from "types/route.types";
import { audioCollector } from "../audio/audio.collector";
import trackListView from "./track.list.view";
import button from "../../components/button";
import navigationModel from "../../../model/navigation.model";
import backButton from "../../components/back.button";
import { MediaEndpoint } from "types/media.endpoint.types";

class MeditationView {
  layout = {} as Layout;

  meditation = {} as Meditation;

  init(root: HTMLElement, id: string) {
    this.meditation = meditationController.getMeditation(id);

    this.createLayout(root);
    this.render();
    this.renderCreateButton();
  }

  createLayout(root: HTMLElement) {
    const { back } = getMeditationsLang();

    this.layout.meditation = document.createElement("section");
    this.layout.meditation.className = "meditation wrapper";

    this.layout.back = backButton.render(`${back}`, Routing.MEDITATIONS);

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "meditation__wrapper cards__container";

    this.layout.meditation.append(this.layout.wrapper);

    this.layout.content = document.createElement("div");
    this.layout.content.className = "meditation__content";

    this.layout.info = document.createElement("div");
    this.layout.info.className = "meditation__info";

    this.layout.add = document.createElement("span");
    this.layout.add.className = "meditation__edit-btn card__edit-btn";

    this.layout.title = document.createElement("h3");
    this.layout.title.className = "meditation__title title top__title";
    this.layout.title.innerText = `${this.meditation.title}`;

    this.layout.img = document.createElement("div");
    this.layout.img.className = "meditation-card__img";
    this.layout.img.innerHTML = `<img src="${MediaEndpoint.MEDITATION}/${this.meditation.media}.jpg" alt="Meditation Picture">`;

    this.layout.desc = document.createElement("div");
    this.layout.desc.className = "meditation__desc";
    this.layout.desc.innerHTML = `<p class="meditation__text">${this.meditation.description}</p>`;

    this.layout.playlist = document.createElement("div");

    this.layout.popup = document.createElement("div");

    this.layout.contentWrapper = document.createElement("div");
    this.layout.contentWrapper.className = "meditation__content-wrapper";

    this.layout.contentWrapper.append(this.layout.info, this.layout.playlist);

    this.layout.content.append(
      this.layout.title,
      this.layout.desc,
      this.layout.add
    );

    this.layout.info.append(this.layout.img, this.layout.content);

    this.layout.modal = document.createElement("div");
    this.layout.modal.className = "modal__tracks";

    this.layout.wrapper.append(this.layout.back, this.layout.contentWrapper);

    root.replaceChildren(this.layout.meditation);
  }

  render() {
    audioCollector.drop();

    if (this.meditation.id)
      trackListView.init(this.layout.playlist, this.meditation.id);
  }

  renderCreateButton() {
    const route =
      navigationModel.createRoute(Routing.MEDITATIONS) +
      "/" +
      this.meditation.id +
      "/edit";

    button.render(this.layout.add, "button__icon icon icon--create", "", () => {
      navigationController.applyRoute(route);
    });
  }
}

export default new MeditationView();
