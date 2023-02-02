class Button {
  render(root: HTMLElement, classes: string, text: string) {
    const button = document.createElement("button");
    button.className = `button ${classes}`;
    button.innerText = text;

    root.append(button);
  }
}

export default new Button();
