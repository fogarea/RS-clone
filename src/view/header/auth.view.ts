class AuthView {
  render(root: HTMLElement) {
    const auth = document.createElement("div");

    root.append(auth);
  }
}

export default new AuthView();
