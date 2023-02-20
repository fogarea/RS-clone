import { Layout } from "types/layout.types";
import completeFormView from "./complete.form.view";
import profileController from "../../../controller/profile.controller";
import { state } from "../../../store/state";
import { getCompleteLang } from "lang/reg/complete.lang";
import formDataView from "../../components/form.data.view";
import loading from "utils/loading";

class CompleteView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    this.addHandler();
  }

  createLayout(root: HTMLElement) {
    const { text, textBold } = getCompleteLang();

    this.layout = formDataView.createLayout(root, `${textBold}`, `${text}`);

    this.layout.text.style.display = "flex";
    this.layout.text.style.order = "1";
  }

  render() {
    this.layout.submit = completeFormView.render(this.layout.formFields);
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

        const complete = await profileController.createProfile({
          _id: state.user.profile.id,
          gender: `${formData.gender}`,
          birthday: `${formData.birthday}`,
          weight: parseInt(`${formData.weight}`),
          height: parseInt(`${formData.height}`)
        });

        if (complete.error) {
          alert(
            `error: ${complete.error}\nmessage: ${complete.message}\ncode: ${complete.code}`
          );
          loading.off(this.layout.submit);
          return;
        }
      }
    });
  }
}

export default new CompleteView();
