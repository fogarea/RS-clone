import button from "../../components/button";

class GoalsButtonView {
  render(root: HTMLElement) {
    button.render(root, "button--bordered", "Sign Up Now");
  }
}

export default new GoalsButtonView();
