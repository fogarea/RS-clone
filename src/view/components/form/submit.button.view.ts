class SubmitButtonView {
  render(root: HTMLElement, text: string) {
    const wrapper = document.createElement("div");
    wrapper.className = "reg-form__submit";

    const input = document.createElement("input");
    input.className = "reg-form__button";
    input.type = "submit";
    input.value = `${text}`;

    wrapper.append(input);

    root.append(wrapper);
  }
}

export default new SubmitButtonView();
