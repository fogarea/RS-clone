import { Layout } from "types/layout.types";
import { getProfileEditLang } from "lang/profile/edit.lang";
import { state } from "../../../../store/state";
import profileController from "../../../../controller/profile.controller";
import formDataView from "../../../components/form.data.view";
import navigationController from "../../../../controller/navigation.controller";
import { Routing } from "types/route.types";
import editProfileDetailsFormView from "./edit.profile.details.form.view";
import backButton from "../../../components/back.button";
import loading from "utils/loading";

class EditProfileDetailsView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    this.addHandler();
  }

  createLayout(root: HTMLElement) {
    const { text, textBold, back } = getProfileEditLang();

    this.layout = formDataView.createLayout(root, `${textBold}`, `${text}`);

    this.layout.back = backButton.render(`${back}`, Routing.PROFILE);

    this.layout.content.prepend(this.layout.back);

    this.layout.text.style.display = "flex";
    this.layout.text.style.order = "1";
  }

  render() {
    this.layout.submit = editProfileDetailsFormView.render(
      this.layout.formFields
    );
  }

  addHandler() {
    this.layout.formFields.addEventListener("submit", async (e: Event) => {
      e.preventDefault();

      const errors = document.querySelectorAll(".error");
      if (errors.length) return;

      if (e.target instanceof HTMLFormElement) {
        const form = e.target;
        const formData = Object.fromEntries(new FormData(form).entries());

        loading.on(this.layout.submit);

        await profileController.updateProfile({
          _id: state.user.profile.id,
          gender: `${formData.gender}`,
          birthday: `${formData.birthday}`,
          weight: parseInt(`${formData.weight}`),
          height: parseInt(`${formData.height}`)
        });

        navigationController.createRoute(Routing.PROFILE);
      }
    });
  }
}

export default new EditProfileDetailsView();
