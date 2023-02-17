import meditationController from "controller/meditation.controller";
import { getMeditationsLang } from "lang/meditation/meditations.lang";
import meditationModel from "model/meditation.model";
import { Layout } from "types/layout.types";
import { Meditation } from "types/meditation.types";
import button from "view/components/button";
import { audioCollector } from "../audio/audio.collector";
import trackListView from "./track.list.view";
import trackPopupView from "./track.popup.view";

class MeditationView {
  layout = {} as Layout;

  meditation = {} as Meditation;

  async init(root: HTMLElement, id: string) {
    this.meditation = meditationController.getMeditation(id);

    this.createLayout(root);
    this.render();
    this.subscribe();
  }

  createLayout(root: HTMLElement) {
    const { change } = getMeditationsLang();

    const container = document.createElement("section");
    container.classList.add("meditations", "wrapper");

    const info = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = this.meditation.title;

    const description = document.createElement("div");
    description.textContent = this.meditation.description;

    const media = document.createElement("div");
    media.textContent = this.meditation.media;

    info.append(title, description, media);

    button.render(info, "button--bordered", `${change}`, () => {
      trackPopupView.init(this.layout.popup, this.meditation);
    });

    this.layout.popup = document.createElement("div");
    this.layout.playlist = document.createElement("div");

    container.append(info, this.layout.playlist, this.layout.popup);

    root.replaceChildren(container);
  }

  render() {
    audioCollector.drop();
    trackListView.init(this.layout.playlist, this.meditation.id);
  }

  subscribe() {
    meditationModel.on("meditation.update.list", () => this.render());
  }
}

export default new MeditationView();
