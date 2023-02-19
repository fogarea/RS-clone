import { InputField } from "./input.field";
import { state } from "../../../store/state";
import { MediaEndpoint } from "types/media.endpoint.types";

class SelectPhotoFieldView extends InputField {
  init(root: HTMLElement, photoIds: number[]) {
    this.createLayout(root, photoIds);
  }

  createLayout(root: HTMLElement, photoIds: number[]) {
    const wrapper = document.createElement("div");
    wrapper.className = "form-fields__images image-fields";

    photoIds.forEach((photoId) => {
      const label = document.createElement("label");
      label.className = "image-fields__label";
      label.setAttribute("for", `pic-${photoId}`);

      const input = document.createElement("input");
      input.className = "image-fields__input";
      input.name = "avatar";
      input.value = `${photoId}`;
      input.id = `pic-${photoId}`;
      input.type = "radio";

      const img = document.createElement("img");
      img.alt = "Profile Picture";
      img.src = `${
        MediaEndpoint.PROFILE
      }/${state.user.profile.gender.toLowerCase()}/${photoId}.svg`;

      if (state.user.avatar === photoId) input.checked = true;

      label.append(input, img);

      wrapper.append(label);
    });

    root.append(wrapper);
  }
}

export default new SelectPhotoFieldView();
