import meditationController from "controller/meditation.controller";
import { getMeditationsLang } from "lang/meditation/meditations.lang";
import { state } from "store/state";
import { Meditation } from "types/meditation.types";
import button from "view/components/button";
import { Audio } from "../audio/audio";

class TrackPopupView {
  usedTracks: string[] = [];

  meditation = {} as Meditation;

  async init(root: HTMLElement, meditation: Meditation) {
    this.usedTracks = meditation.tracks;
    this.meditation = meditation;
    this.render(root);
  }

  render(root: HTMLElement) {
    const { change } = getMeditationsLang();

    const container = document.createElement("div");

    const tracksContainer = document.createElement("div");
    tracksContainer.setAttribute(
      "style",
      "border-top: 1px dashed #000; border-bottom: 1px dashed #000;"
    );

    const tracks: HTMLDivElement[] = [];
    for (const track of state.tracks) {
      const trackItem = document.createElement("div");

      const trackCheckbox = document.createElement("input");
      trackCheckbox.type = "checkbox";
      trackCheckbox.dataset.id = track.id;
      trackCheckbox.classList.add("track__checkbox");
      trackCheckbox.checked = this.usedTracks.includes(track.id);

      const trackInfo = document.createElement("div");
      trackInfo.textContent = track.title;

      const trackPlayer = new Audio(track.media, track.id).self;

      trackItem.append(trackInfo, trackPlayer, trackCheckbox);

      tracks.push(trackItem);
    }

    tracksContainer.append(...tracks);

    const buttonContainer = document.createElement("div");

    button.render(
      buttonContainer,
      "button--bordered",
      `${change}`,
      async () => {
        await meditationController.updateMeditationTracks(
          this.meditation,
          tracks
        );
        container.remove();
      }
    );

    container.append(tracksContainer, buttonContainer);

    root.replaceChildren(container);
  }
}

export default new TrackPopupView();
