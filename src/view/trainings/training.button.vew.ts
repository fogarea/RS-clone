import button from "../components/button";
import { getTrainingsLang } from "../../lang/trainings.lang";

class TrainingButtonView {
  render(root: HTMLElement) {
    const { btn } = getTrainingsLang();

    button.render(root, "button button--colored button--large", `${btn}`);
  }
}

export default new TrainingButtonView();
