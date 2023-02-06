class ImageView {
  render(root: HTMLElement) {
    const img = document.createElement("span");
    img.className = "icon icon--promo";

    root.append(img);
  }
}

export default new ImageView();
