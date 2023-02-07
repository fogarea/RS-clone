import switchColorScheme from "../../utils/switchColorScheme";

class ColorSchemeView {
  render(root: HTMLElement) {
    const checkbox = document.createElement("input");
    checkbox.className = "switch-scheme__checkbox";
    checkbox.type = "checkbox";

    const slider = document.createElement("span");
    slider.className = "switch-scheme__slider";
    slider.id = "switch-scheme";

    switchColorScheme.init(checkbox);

    root.replaceChildren(checkbox, slider);
  }
}

export default new ColorSchemeView();
