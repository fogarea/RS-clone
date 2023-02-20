import preloaderUtils from "./preloader.utils";

class Loading {
  prevState = new Map();

  on(elem: HTMLElement | null) {
    if (!elem) return;

    elem.classList.add("loading");

    if (elem instanceof HTMLInputElement) {
      this.prevState.set(elem, elem.value);
      elem.value = ". . .";
    } else {
      this.prevState.set(elem, elem.textContent);
      elem.textContent = ". . .";
    }
  }

  off(elem: HTMLElement | null) {
    if (!elem) return;

    elem.classList.remove("loading");

    const prevState = this.prevState.get(elem);

    if (elem instanceof HTMLInputElement) elem.value = prevState;
    else elem.textContent = prevState;

    this.prevState.delete(elem);
  }

  globalOn(root: HTMLElement | null) {
    if (root) preloaderUtils.init(root, false);
  }

  globalOff() {
    preloaderUtils.finishPreloader();
    window.scrollTo(0, 0);
  }
}

export default new Loading();
