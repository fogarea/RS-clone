class SwitchColorScheme {
  public init(checkbox: HTMLInputElement) {
    !this.scheme ? (this.darkScheme = checkbox) : (this.lightScheme = checkbox);
  }

  public changeScheme(e: Event) {
    const target = e.target as HTMLInputElement;
    target.checked ? (this.lightScheme = target) : (this.darkScheme = target);
    this.scheme = target.checked;
  }

  private set lightScheme(checkbox: HTMLInputElement) {
    document.body.classList.add("body--light");
    checkbox.checked = true;
  }

  private set darkScheme(checkbox: HTMLInputElement) {
    document.body.classList.remove("body--light");
    checkbox.checked = false;
  }

  private get scheme() {
    const scheme = localStorage.getItem("color-scheme");
    return scheme ? JSON.parse(scheme) : "false";
  }

  private set scheme(scheme: boolean) {
    localStorage.setItem("color-scheme", `${scheme}`);
  }
}

export default new SwitchColorScheme();
