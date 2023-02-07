import dateFieldView from "../../components/form/date.field.view";
import selectFieldView from "../../components/form/select.field.view";
import numberFieldView from "../../components/form/number.field.view";
import submitButtonView from "../../components/form/submit.button.view";
import { getCompleteLang } from "../../../lang/reg/complete.lang";

class CompleteFormView {
  render(root: HTMLElement) {
    const { gender, genderOptions, birthday, weight, height, btn } =
      getCompleteLang();

    if (Array.isArray(genderOptions))
      selectFieldView.init(root, `${gender}`, genderOptions);
    dateFieldView.init(root, `${birthday}`);
    numberFieldView.init(root, "weight", "icon--weight", "weight", `${weight}`);
    numberFieldView.init(root, "height", "icon--height", "height", `${height}`);
    submitButtonView.render(root, `${btn}`);
  }
}

export default new CompleteFormView();
