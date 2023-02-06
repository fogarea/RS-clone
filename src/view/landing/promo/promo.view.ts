import { Layout } from "types/layout.types";
import imageView from "./image.view";
import contentView from "./content.view";
import promoButtonView from "./promo.button.view";

class PromoView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    //this.addHandlers(root);
  }

  createLayout(root: HTMLElement) {
    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "wrapper promo__wrapper";

    this.layout.content = document.createElement("div");
    this.layout.content.className = "promo__content";

    this.layout.button = document.createElement("div");
    this.layout.button.className = "promo__button";

    this.layout.img = document.createElement("div");
    this.layout.img.className = "promo__img";

    this.layout.content.append(this.layout.button);

    this.layout.wrapper.append(this.layout.content, this.layout.img);

    root.append(this.layout.wrapper);
  }

  render() {
    contentView.render(this.layout.content);
    promoButtonView.render(this.layout.content);
    imageView.render(this.layout.img);
  }
}

export default new PromoView();
