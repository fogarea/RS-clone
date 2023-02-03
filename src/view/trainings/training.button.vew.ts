import button from "../components/button";

class TrainingButtonView {
  render(root: HTMLElement) {
    button.render(root, "button button--colored button--large", "Try it out");
  }
}

export default new TrainingButtonView();
