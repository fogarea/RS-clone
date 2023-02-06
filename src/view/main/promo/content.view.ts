import { getPromoLang } from "../../../lang/landing/promo.lang";

class PromoContentView {
  render(root: HTMLElement) {
    const { title, text } = getPromoLang();

    if (text && title) {
      root.innerHTML = `<h1 class="promo__title title">${title[0]} <span class="promo__title-char">${title[1]}</span> ${title[2]}</h1>
                         <p class="promo__text text">${text}</p>`;
    }
  }
}

export default new PromoContentView();
