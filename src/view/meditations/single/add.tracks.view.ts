import { Meditation } from "types/meditation.types";
import formDataView from "../../components/form.data.view";
import { Layout } from "types/layout.types";
import submitButtonView from "../../components/form/submit.button.view";
import { getCreateMeditationLang } from "lang/meditation/create.meditation.lang";
import meditationController from "../../../controller/meditation.controller";
import { getUpdateMeditationLang } from "lang/meditation/update.meditation.lang";
import selectTracksFieldView from "../../components/form/select.tracks.field.view";
import navigationModel from "../../../model/navigation.model";
import { Routing } from "types/route.types";
import navigationController from "../../../controller/navigation.controller";
import backButton from "../../components/back.button";
import loading from "../../../utils/loading";

class AddTracksView {
  layout = {} as Layout;

  meditation = {} as Meditation;

  tracks: HTMLLabelElement[] = [];

  init(root: HTMLElement, id: string) {
    this.meditation = meditationController.getMeditation(id);

    this.createLayout(root);
    this.createForm();
    this.addHandler();
  }

  createLayout(root: HTMLElement) {
    const { text, textBold } = this.meditation.id
      ? getUpdateMeditationLang()
      : getCreateMeditationLang();

    const wrapper = document.createElement("div");
    wrapper.className = "add-tracks";

    this.layout = formDataView.createLayout(wrapper, `${textBold}`, `${text}`);

    this.layout.back = backButton.render(
      `${this.meditation.title.slice(0, 60)}`,
      Routing.MEDITATIONS + "/" + this.meditation.id
    );

    this.layout.text.style.display = "flex";
    this.layout.text.style.order = "1";

    this.layout.content.prepend(this.layout.back);

    root.replaceChildren(wrapper);
  }

  createForm() {
    const { btn } = getUpdateMeditationLang();

    this.tracks = selectTracksFieldView.init(
      this.layout.formFields,
      this.meditation
    );

    this.layout.submit = submitButtonView.render(
      this.layout.formFields,
      `${btn}`
    );
  }

  addHandler() {
    this.layout.formFields.addEventListener("submit", async (e: Event) => {
      e.preventDefault();
      const route =
        navigationModel.createRoute(Routing.MEDITATIONS) +
        "/" +
        this.meditation.id;

      loading.on(this.layout.submit);

      await meditationController.updateMeditationTracks(
        this.meditation,
        this.tracks
      );

      navigationController.applyRoute(route);
    });
  }
}

export default new AddTracksView();
