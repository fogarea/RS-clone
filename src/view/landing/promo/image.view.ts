const imgSrc = require("../../../assets/img/landing/promo.png") as string;

class ImageView {
  render(root: HTMLElement) {
    const img = document.createElement("img");
    img.alt = "Promo Image";
    img.src = imgSrc;

    root.append(img);
  }
}

export default new ImageView();
