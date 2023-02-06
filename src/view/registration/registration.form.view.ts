import firstNameFieldView from "../components/form/first.name.field.view";
import lastNameFieldView from "../components/form/last.name.field.view";
import phoneFieldView from "../components/form/phone.field.view";
import emailFieldView from "../components/form/email.field.view";
import passwordFieldView from "../components/form/password.field.view";
import submitButtonView from "../components/form/submit.button.view";
import { getRegLang } from "../../lang/reg.lang";

class RegistrationFormView {
  render(root: HTMLElement) {
    const { name, surname, phone, email, password, btn } = getRegLang();

    firstNameFieldView.init(root, `${name}`);
    lastNameFieldView.init(root, `${surname}`);
    phoneFieldView.init(root, `${phone}`);
    emailFieldView.init(root, "reg-email", `${email}`);
    passwordFieldView.init(root, "reg-password", `${password}`);
    submitButtonView.render(root, `${btn}`);
  }
}

export default new RegistrationFormView();
