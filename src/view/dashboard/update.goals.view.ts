import { Layout } from "types/layout.types";
import numberFieldView from "../components/form/number.field.view";
import { state } from "../../store/state";
import goalsController from "../../controller/goals.controller";
import { ModalWindow } from "../components/modal/modal.view";
import formDataView from "../components/form.data.view";
import submitButtonView from "../components/form/submit.button.view";
import { getUpdateGoalsLang } from "lang/dashboard/udate.goals.lang";
import loading from "../../utils/loading";

class UpdateGoalsView {
  layout = {} as Layout;

  init(root: HTMLElement, modal: ModalWindow) {
    this.createLayout(root);
    this.createForm();
    this.addHandler(modal);
  }

  createLayout(root: HTMLElement) {
    const { text, textBold } = getUpdateGoalsLang();

    this.layout = formDataView.createLayout(root, `${textBold}`, `${text}`);

    this.layout.text.style.display = "flex";
    this.layout.text.style.order = "1";
  }

  createForm() {
    const { btn } = getUpdateGoalsLang();

    const { steps, water } = state.user.goals;
    numberFieldView.init(
      this.layout.formFields,
      "steps",
      "icon icon--steps",
      "steps",
      "",
      `${steps}`
    );

    numberFieldView.init(
      this.layout.formFields,
      "water",
      "icon icon--water",
      "water",
      "",
      `${water}`
    );

    this.layout.submit = submitButtonView.render(
      this.layout.formFields,
      `${btn}`
    );
  }

  addHandler(modal: ModalWindow) {
    this.layout.formFields.addEventListener("submit", async (e: Event) => {
      e.preventDefault();

      const errors = document.querySelectorAll(".error");
      if (errors.length) return;

      if (e.target instanceof HTMLFormElement) {
        const form = e.target;

        loading.on(this.layout.submit);

        const formData = Object.fromEntries(new FormData(form).entries());

        const goal = {
          water: parseInt(`${formData.water}`),
          steps: parseInt(`${formData.steps}`)
        };

        await goalsController.updateGoals({ goals: goal });

        modal.removeModal();
      }
    });
  }
}

export default new UpdateGoalsView();
