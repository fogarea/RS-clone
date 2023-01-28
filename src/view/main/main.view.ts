class MainView {
  init(root: HTMLElement) {
    this.render(root);
  }

  render(root: HTMLElement) {
    const main = document.createElement("div");
    main.innerHTML = "Main";

    root.replaceChildren(main);
  }
}

export default new MainView();
