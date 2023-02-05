import emailFieldView from "../components/form/email.field.view";
import passwordFieldView from "../components/form/password.field.view";
import submitButtonView from "../components/form/submit.button.view";

class AuthFormView {
  render(root: HTMLElement) {
    emailFieldView.init(root, "auth-email");
    passwordFieldView.init(root, "auth-password");
    submitButtonView.render(root, "Authorize");
  }
}

export default new AuthFormView();
