class AboutView {
  init(root: HTMLElement) {
    this.render(root);
  }

  render(root: HTMLElement) {
    const about = document.createElement("div");
    about.innerHTML = "About";

    root.replaceChildren(about);
  }
}

export default new AboutView();
