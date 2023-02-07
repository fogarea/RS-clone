import { Languages, MultiLang } from "types/lang.types";

class Lang {
  getDictionaryLang(dictionary: Languages) {
    const currentLang: Partial<MultiLang> = {};

    for (const key of Object.keys(dictionary)) {
      currentLang[key] = dictionary[key][this.getLang()];
    }

    return currentLang;
  }

  public init() {
    const lang = this.getLang();
    this.setLang(lang);
  }

  public getLang() {
    const lang = localStorage.getItem("lang");
    return lang ? lang : "en";
  }

  public setLang(language: string) {
    localStorage.setItem("lang", `${language}`);
  }
}

export default new Lang();
