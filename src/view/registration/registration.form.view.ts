import firstNameFieldView from "../components/form/first.name.field.view";
import lastNameFieldView from "../components/form/last.name.field.view";
import phoneFieldView from "../components/form/phone.field.view";
import emailFieldView from "../components/form/email.field.view";
import passwordFieldView from "../components/form/password.field.view";
import submitButtonView from "../components/form/submit.button.view";
import { getRegLang } from "lang/reg/reg.lang";

class RegistrationFormView {
  render(root: HTMLElement) {
    const {
      namePlace,
      surnamePlace,
      phonePlace,
      emailPlace,
      passwordPlace,
      btn
    } = getRegLang();

    firstNameFieldView.init(root, `${namePlace}`);
    lastNameFieldView.init(root, `${surnamePlace}`);
    phoneFieldView.init(root, `${phonePlace}`);
    emailFieldView.init(root, "reg-email", `${emailPlace}`);
    passwordFieldView.init(root, "reg-password", `${passwordPlace}`);
    return submitButtonView.render(root, `${btn}`);
  }
}

export default new RegistrationFormView();
