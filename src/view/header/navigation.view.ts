class NavigationView {

  render(root: HTMLElement) {
    const navigation = document.createElement("div");

    root.append(navigation);
  }
}

export default new NavigationView();
