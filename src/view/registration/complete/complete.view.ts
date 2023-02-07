import { Layout } from "types/layout.types";
import completeFormView from "./complete.form.view";
import profileController from "../../../controller/profile.controller";
import { state } from "../../../store/state";
import { HttpProfileRequest } from "types/http.request.types";
import { getCompleteLang } from "../../../lang/reg/complete.lang";

class CompleteView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    this.addHandler();
  }

  createLayout(root: HTMLElement) {
    const { text, textBold } = getCompleteLang();

    this.layout.complete = document.createElement("section");
    this.layout.complete.className = "complete";

    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "wrapper complete__wrapper";

    this.layout.content = document.createElement("div");
    this.layout.content.className = "complete__content";

    this.layout.desc = document.createElement("div");
    this.layout.desc.className = "complete__desc";

    this.layout.textBold = document.createElement("p");
    this.layout.textBold.className = "complete__text--bold";
    this.layout.textBold.innerText = `${textBold}`;

    this.layout.text = document.createElement("p");
    this.layout.text.className = "complete__text";
    this.layout.text.innerText = `${text}`;

    this.layout.desc.append(this.layout.textBold, this.layout.text);

    this.layout.form = document.createElement("form");
    this.layout.form.className = "complete__form reg-form";

    this.layout.button = document.createElement("div");
    this.layout.button.className = "complete__button";

    this.layout.content.append(
      this.layout.desc,
      this.layout.form,
      this.layout.button
    );

    this.layout.wrapper.append(this.layout.content);

    this.layout.complete.append(this.layout.wrapper);

    root.replaceChildren(this.layout.complete);
  }

  render() {
    completeFormView.render(this.layout.form);
  }

  addHandler() {
    this.layout.form.addEventListener("submit", async (e: Event) => {
      e.preventDefault();

      const errors = document.querySelectorAll(".error");
      if (errors.length) return;

      if (e.target instanceof HTMLFormElement) {
        const form = e.target;
        const formData = Object.fromEntries(new FormData(form).entries());

        const profile: HttpProfileRequest = {
          _id: state.user.profile,
          gender: `${formData.gender}`,
          birthday: `${formData.birthday}`,
          weight: parseInt(`${formData.weight}`),
          height: parseInt(`${formData.height}`)
        };

        await profileController.createProfile(profile);
      }
    });
  }
}

export default new CompleteView();
