import { Layout } from "types/layout.types";
import { getProfileEditLang } from "../../../../lang/profile/edit.lang";
import editProfileFormView from "./edit.profile.form.view";
import profileController from "../../../../controller/profile.controller";
import formDataView from "../../../components/form.data.view";
import navigationController from "../../../../controller/navigation.controller";
import { Routing } from "types/route.types";

class EditProfileView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    this.addHandler();
  }

  createLayout(root: HTMLElement) {
    const { text, textBold } = getProfileEditLang();

    this.layout = formDataView.createLayout(root, `${textBold}`, `${text}`);

    this.layout.text.style.display = "flex";
    this.layout.text.style.order = "1";
  }

  render() {
    editProfileFormView.render(this.layout.formFields);
  }

  addHandler() {
    this.layout.formFields.addEventListener("submit", async (e: Event) => {
      e.preventDefault();

      const errors = document.querySelectorAll(".error");
      if (errors.length) return;

      if (e.target instanceof HTMLFormElement) {
        const form = e.target;

        const formData = Object.fromEntries(new FormData(form).entries());

        await profileController.updateProfileCredentials({
          avatar: parseInt(`${formData.avatar}`),
          name: `${formData.name}`,
          surname: `${formData.surname}`,
          phone: `${formData.phone}`
        });

        navigationController.createRoute(Routing.PROFILE);
      }
    });
  }
}

export default new EditProfileView();
