import { state } from "store/state";
import button from "view/components/button";
import meditationPopup from "./meditation.popup.view";
import { getMeditationsLang } from "lang/meditation/meditations.lang";
import meditationController from "controller/meditation.controller";
import navigationModel from "model/navigation.model";
import { Routing } from "types/route.types";
import navigationController from "controller/navigation.controller";

class MeditationListView {
  async init(root: HTMLElement, popup: HTMLElement) {
    this.render(root, popup);
  }

  render(root: HTMLElement, popup: HTMLElement) {
    const meditations = [];
    const { nothing, edit, remove, open } = getMeditationsLang();

    const container = document.createElement("div");
    for (const meditation of state.user.meditations) {
      const meditationItem = document.createElement("div");
      meditationItem.innerHTML = `
        title: ${meditation.title}<br>
        descr: ${meditation.description}<br>
        media: ${meditation.media}<br>
      `;

      const route =
        navigationModel.createRoute(Routing.MEDITATIONS) + "/" + meditation.id;

      button.render(meditationItem, "button--bordered", `${edit}`, () => {
        meditationPopup.init(popup, meditation);
      });

      button.render(meditationItem, "button--bordered", `${remove}`, () => {
        meditationController.delete(meditation);
      });

      button.render(meditationItem, "button--bordered", `${open}`, () => {
        navigationController.applyRoute(route);
      });

      meditations.push(meditationItem);
    }

    if (!meditations.length) {
      const meditationItem = document.createElement("div");
      meditationItem.textContent = `${nothing}`;

      meditations.push(meditationItem);
    }

    container.append(...meditations);

    root.replaceChildren(container);
  }
}

export default new MeditationListView();
