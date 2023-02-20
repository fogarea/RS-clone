class SubmitButtonView {
  render(root: HTMLElement, text: string) {
    const wrapper = document.createElement("div");
    wrapper.className = "form-fields__submit";

    const input = document.createElement("input");
    input.className = "form-fields__button";
    input.type = "submit";
    input.value = `${text}`;

    wrapper.append(input);

    root.append(wrapper);

    return input;
  }
}

export default new SubmitButtonView();
