import lang from "../../lang/lang";
import { getSwitcherLang } from "../../lang/footer/switcher.lang";

class LangSwitcherView {
  render(root: HTMLElement) {
    const { optionRu, optionEn } = getSwitcherLang();

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

    root.replaceChildren(select);
  }
}

export default new LangSwitcherView();
