import { Meditation } from "types/meditation.types";
import formDataView from "../../components/form.data.view";
import { Layout } from "types/layout.types";
import submitButtonView from "../../components/form/submit.button.view";
import titleFieldView from "../../components/form/title.field.view";
import descFieldView from "../../components/form/desc.field.view";
import { getCreateMeditationLang } from "lang/meditation/create.meditation.lang";
import selectPlaylistPhotoFieldView from "../../components/form/select.playlist.photo.field.view";
import meditationController from "../../../controller/meditation.controller";
import { getUpdateMeditationLang } from "lang/meditation/update.meditation.lang";
import { ModalWindow } from "../../components/modal/modal.view";
import loading from "../../../utils/loading";

const photoIds = [0, 1, 2];

class CreateMeditationView {
  layout = {} as Layout;

  init(root: HTMLElement, modal: ModalWindow, meditation: Meditation) {
    this.createLayout(root, meditation);
    meditation.id ? this.renderUpdateForm(meditation) : this.renderCreateForm();
    this.addHandler(meditation, modal);
  }

  createLayout(root: HTMLElement, meditation: Meditation) {
    const { text, textBold } = meditation.id
      ? getUpdateMeditationLang()
      : getCreateMeditationLang();

    this.layout = formDataView.createLayout(root, `${textBold}`, `${text}`);

    this.layout.text.style.display = "flex";
    this.layout.text.style.order = "1";
  }

  renderUpdateForm(meditation: Meditation) {
    const { titlePlace, descPlace, btn } = getUpdateMeditationLang();

    selectPlaylistPhotoFieldView.init(
      this.layout.formFields,
      photoIds,
      meditation.media
    );

    titleFieldView.init(
      this.layout.formFields,
      `${titlePlace}`,
      meditation.title
    );

    descFieldView.init(
      this.layout.formFields,
      `${descPlace}`,
      meditation.description
    );

    this.layout.submit = submitButtonView.render(
      this.layout.formFields,
      `${btn}`
    );
  }

  renderCreateForm() {
    const { titlePlace, descPlace, btn } = getCreateMeditationLang();

    selectPlaylistPhotoFieldView.init(this.layout.formFields, photoIds, "0");

    titleFieldView.init(this.layout.formFields, `${titlePlace}`);

    descFieldView.init(this.layout.formFields, `${descPlace}`);

    this.layout.submit = submitButtonView.render(
      this.layout.formFields,
      `${btn}`
    );
  }

  addHandler(meditation: Meditation, modal: ModalWindow) {
    this.layout.formFields.addEventListener("submit", async (e: Event) => {
      e.preventDefault();

      if (e.target instanceof HTMLFormElement) {
        const form = e.target;

        loading.on(this.layout.submit);

        const formData = Object.fromEntries(new FormData(form).entries());

        const playlist = {
          id: meditation.id,
          owner: meditation.owner,
          title: `${formData.title}`,
          description: `${formData.desc}`,
          media: `${formData.media}`,
          tracks: meditation.tracks
        };

        if (meditation.id) await meditationController.update(playlist);
        else await meditationController.create(playlist);

        modal.removeModal();
      }
    });
  }
}

export default new CreateMeditationView();
