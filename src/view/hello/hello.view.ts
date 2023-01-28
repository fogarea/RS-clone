class HelloView {
  init(root: HTMLElement) {
    this.render(root);
  }

  render(root: HTMLElement) {
    const hello = document.createElement("div");
    hello.innerHTML = "Hello";

    root.replaceChildren(hello);
  }
}

export default new HelloView();
