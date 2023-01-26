class MainView {
  init(root: HTMLElement) {
    this.render(root);
  }

  render(root: HTMLElement) {
    const hello = document.createElement("a");
    hello.textContent = "hello";

    root.removeChild(hello);
  }
}

export default new MainView();
