import button from "../components/button";

class LoginButtonsView {
  render(root: HTMLElement) {
    button.render(root, "button--bordered", "Sign In");
    button.render(root, "button--colored", "Sign Up");
  }
}

export default new LoginButtonsView();
