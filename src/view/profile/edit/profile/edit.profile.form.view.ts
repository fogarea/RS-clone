import submitButtonView from "../../../components/form/submit.button.view";
import { getCompleteLang } from "lang/reg/complete.lang";
import { getRegLang } from "lang/reg/reg.lang";
import firstNameFieldView from "../../../components/form/first.name.field.view";
import lastNameFieldView from "../../../components/form/last.name.field.view";
import phoneFieldView from "../../../components/form/phone.field.view";
import { state } from "../../../../store/state";
import selectPhotoFieldView from "../../../components/form/select.photo.field.view";

const photoIds = [0, 1, 2, 3];

class EditProfileFormView {
  render(root: HTMLElement) {
    const { btn } = getCompleteLang();

    const { namePlace, surnamePlace, phonePlace } = getRegLang();

    const { name, surname, phone } = state.user;

    selectPhotoFieldView.init(root, photoIds);

    firstNameFieldView.init(root, `${namePlace}`, name);

    lastNameFieldView.init(root, `${surnamePlace}`, surname);

    phoneFieldView.init(root, `${phonePlace}`, phone);

    return submitButtonView.render(root, `${btn}`);
  }
}

export default new EditProfileFormView();
