import lang from "../../lang/lang";
import { getSwitcherLang } from "lang/footer/switcher.lang";

class LangSwitcherView {
  render(root: HTMLElement) {
    const { title, optionRu, optionEn } = getSwitcherLang();

    const text = document.createElement("p");
    text.className = "select-lang__text";
    text.innerText = `${title}`;

    const select = document.createElement("select");
    select.className = "select-lang";

    const enOption = document.createElement("option");
    enOption.value = `en`;
    enOption.innerText = `${optionEn}`;

    const ruOption = document.createElement("option");
    ruOption.value = `ru`;
    ruOption.innerText = `${optionRu}`;

    enOption.value === lang.getLang()
      ? (enOption.selected = true)
      : (ruOption.selected = true);

    select.append(enOption, ruOption);

    root.replaceChildren(text, select);
  }
}

export default new LangSwitcherView();
