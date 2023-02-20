import dateFieldView from "../../components/form/date.field.view";
import selectFieldView from "../../components/form/select.field.view";
import numberFieldView from "../../components/form/number.field.view";
import submitButtonView from "../../components/form/submit.button.view";
import { getCompleteLang } from "lang/reg/complete.lang";

class CompleteFormView {
  render(root: HTMLElement) {
    const {
      genderPlace,
      genderOptions,
      birthdayPlace,
      weightPlace,
      heightPlace,
      btn
    } = getCompleteLang();

    if (Array.isArray(genderOptions))
      selectFieldView.init(root, `${genderPlace}`, genderOptions);
    dateFieldView.init(root, `${birthdayPlace}`);
    numberFieldView.init(
      root,
      "weight",
      "icon--weight",
      "weight",
      `${weightPlace}`
    );
    numberFieldView.init(
      root,
      "height",
      "icon--height",
      "height",
      `${heightPlace}`
    );
    return submitButtonView.render(root, `${btn}`);
  }
}

export default new CompleteFormView();
