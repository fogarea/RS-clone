import firstNameFieldView from "../components/form/first.name.field.view";
import lastNameFieldView from "../components/form/last.name.field.view";
import phoneFieldView from "../components/form/phone.field.view";
import emailFieldView from "../components/form/email.field.view";
import passwordFieldView from "../components/form/password.field.view";
import submitButtonView from "../components/form/submit.button.view";

class RegistrationFormView {
  render(root: HTMLElement) {
    firstNameFieldView.init(root);
    lastNameFieldView.init(root);
    phoneFieldView.init(root);
    emailFieldView.init(root, "reg-email");
    passwordFieldView.init(root, "reg-password");
    submitButtonView.render(root, "Register");
  }
}

export default new RegistrationFormView();
