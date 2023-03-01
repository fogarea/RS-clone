import dateFieldView from "../../../components/form/date.field.view";
import selectFieldView from "../../../components/form/select.field.view";
import submitButtonView from "../../../components/form/submit.button.view";
import { getCompleteLang } from "lang/reg/complete.lang";
import { state } from "../../../../store/state";
import weightFieldView from "../../../components/form/weight.field.view";
import heightFieldView from "../../../components/form/height.field.view";

class EditProfileDetailsFormView {
  render(root: HTMLElement) {
    const {
      genderPlace,
      genderOptions,
      birthdayPlace,
      weightPlace,
      heightPlace,
      btn
    } = getCompleteLang();

    const { gender, weight, height, birthday } = state.user.profile;

    if (Array.isArray(genderOptions))
      selectFieldView.init(root, `${genderPlace}`, genderOptions, gender);

    dateFieldView.init(root, `${birthdayPlace}`, birthday.substring(0, 10));

    weightFieldView.init(
      root,
      "weight",
      "icon--weight",
      "weight",
      `${weightPlace}`,
      `${weight}`
    );

    heightFieldView.init(
      root,
      "height",
      "icon--height",
      "height",
      `${heightPlace}`,
      `${height}`
    );

    return submitButtonView.render(root, `${btn}`);
  }
}

export default new EditProfileDetailsFormView();
