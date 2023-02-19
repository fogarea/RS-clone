import { InputField } from "./input.field";
import { Meditation } from "types/meditation.types";
import { state } from "../../../store/state";
import { Audio } from "../../meditations/audio/audio";

class SelectPlaylistPhotoFieldView extends InputField {
  usedTracks: string[] = [];

  meditation = {} as Meditation;

  tracks: HTMLLabelElement[] = [];

  init(root: HTMLElement, meditation: Meditation) {
    this.tracks = [];
    this.usedTracks = meditation.tracks;
    this.meditation = meditation;

    this.createLayout(root);

    return this.tracks;
  }

  createLayout(root: HTMLElement) {
    const wrapper = document.createElement("div");
    wrapper.className = "form-fields__tracks tracks-fields playlist";

    state.tracks.forEach(({ id, media, title }, index) => {
      const trackField = document.createElement("div");
      trackField.className = "tracks-fields__item playlist__track";

      const label = document.createElement("label");
      label.className = "tracks-fields__label";
      label.setAttribute("for", `track-${id}`);

      const icon = document.createElement("span");
      icon.className = `tracks-fields__icon icon icon--like`;

      const input = document.createElement("input");
      input.className = "tracks-fields__input";
      input.name = `track-${index}`;
      input.value = `${id}`;
      input.id = `track-${id}`;
      input.type = "checkbox";
      input.checked = this.usedTracks.includes(id);

      label.append(input, icon);

      const track = document.createElement("div");
      track.className = "playlist__track-form";

      const trackInfo = document.createElement("div");
      trackInfo.className = "playlist__title";
      trackInfo.textContent = title;

      const trackPlayer = new Audio(media, id).self;

      track.append(trackInfo, trackPlayer);

      trackField.append(label, track);

      wrapper.append(trackField);

      this.tracks.push(label);
    });

    root.append(wrapper);
  }
}

export default new SelectPlaylistPhotoFieldView();
