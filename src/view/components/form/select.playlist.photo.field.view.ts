import { InputField } from "./input.field";
import { MediaEndpoint } from "types/media.endpoint.types";

class SelectPlaylistPhotoFieldView extends InputField {
  init(root: HTMLElement, photoIds: number[], activeId: string) {
    this.createLayout(root, photoIds, activeId);
  }

  createLayout(root: HTMLElement, photoIds: number[], activeId: string) {
    const wrapper = document.createElement("div");
    wrapper.className = "form-fields__images image-fields";

    photoIds.forEach((photoId) => {
      const label = document.createElement("label");
      label.className = "image-fields__label";
      label.setAttribute("for", `pic-${photoId}`);

      const input = document.createElement("input");
      input.className = "image-fields__input";
      input.name = "media";
      input.value = `${photoId}`;
      input.id = `pic-${photoId}`;
      input.type = "radio";

      const img = document.createElement("img");
      img.alt = "Playlist Image";
      img.src = `${MediaEndpoint.MEDITATION}/${photoId}.jpg`;

      if (activeId === `${photoId}`) input.checked = true;

      label.append(input, img);

      wrapper.append(label);
    });

    root.append(wrapper);
  }
}

export default new SelectPlaylistPhotoFieldView();
