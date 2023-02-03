class Button {
  render(
    root: HTMLElement,
    classes: string,
    text: string,
    callback?: (event: Event) => void
  ) {
    const button = document.createElement("button");
    button.className = `button ${classes}`;
    button.innerText = text;

    if (callback) {
      button.addEventListener("click", (event: Event) => {
        callback(event);
      });
    }

    root.append(button);
  }
}

export default new Button();
