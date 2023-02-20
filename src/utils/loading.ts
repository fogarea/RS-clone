import preloaderUtils from "./preloader.utils";

class Loading {
  prevState = new Map();

  on(elem: HTMLElement | null, withDots = true) {
    console.log(elem);
    if (!elem) return;

    elem.classList.add("loading");

    if (elem instanceof HTMLInputElement) {
      this.prevState.set(elem, elem.value);
      if (withDots) elem.value = ". . .";
    } else {
      this.prevState.set(elem, elem.textContent);
      if (withDots) elem.textContent = ". . .";
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
    window.scrollTo(0, 0);
    if (root) preloaderUtils.init(root, false);
  }

  globalOff() {
    preloaderUtils.finishPreloader();
  }
}

export default new Loading();
