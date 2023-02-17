import button from "view/components/button";
import { getMeditationsLang } from "lang/meditation/meditations.lang";
import meditationController from "controller/meditation.controller";
import { Meditation } from "types/meditation.types";

class MeditationListView {
  async init(root: HTMLElement, meditation: Meditation) {
    this.render(root, meditation);
  }

  render(root: HTMLElement, meditation: Meditation) {
    const { save } = getMeditationsLang();

    const popup = document.createElement("div");
    popup.setAttribute(
      "style",
      "display: flex; flex-direction: column; gap: 20px;"
    );

    const title = document.createElement("input");
    title.value = meditation.title;
    title.placeholder = "title";

    const description = document.createElement("input");
    description.value = meditation.description;
    description.placeholder = "description";

    const media = document.createElement("input");
    media.value = meditation.media;
    media.type = "number";
    media.placeholder = "media";

    button.render(popup, "button--bordered", `${save}`, () => {
      const request = {
        id: meditation.id,
        owner: meditation.owner,
        title: title.value,
        description: description.value,
        media: media.value,
        tracks: meditation.tracks
      };

      if (meditation.id) meditationController.update(request);
      else meditationController.create(request);

      popup.remove();
    });

    popup.append(title, description, media);

    root.replaceChildren(popup);
  }
}

export default new MeditationListView();
