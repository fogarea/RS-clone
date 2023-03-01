import dateFieldView from "../../components/form/date.field.view";
import selectFieldView from "../../components/form/select.field.view";
import submitButtonView from "../../components/form/submit.button.view";
import { getCompleteLang } from "lang/reg/complete.lang";
import weightFieldView from "../../components/form/weight.field.view";
import heightFieldView from "../../components/form/height.field.view";

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
    weightFieldView.init(
      root,
      "weight",
      "icon--weight",
      "weight",
      `${weightPlace}`
    );
    heightFieldView.init(
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
