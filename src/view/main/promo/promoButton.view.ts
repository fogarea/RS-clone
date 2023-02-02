import button from "../../components/button";

class PromoButtonView {
  render(root: HTMLElement) {
    button.render(root, "button--colored", "Join to our team");
  }
}

export default new PromoButtonView();
