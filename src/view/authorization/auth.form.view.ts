import emailFieldView from "../components/form/email.field.view";
import passwordFieldView from "../components/form/password.field.view";
import submitButtonView from "../components/form/submit.button.view";
import { getAuthLang } from "lang/auth.lang";

class AuthFormView {
  render(root: HTMLElement) {
    const { email, password, btn } = getAuthLang();

    emailFieldView.init(root, "auth-email", `${email}`);
    passwordFieldView.init(root, "auth-password", `${password}`);
    return submitButtonView.render(root, `${btn}`);
  }
}

export default new AuthFormView();
