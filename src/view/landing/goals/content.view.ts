import { getGoalsLang } from "lang/landing/goals.lang";

const images = [
  require("../../../assets/img/landing/promo2.png") as string,
  require("../../../assets/img/landing/promo3.png") as string,
  require("../../../assets/img/landing/promo4.png") as string,
  require("../../../assets/img/landing/promo5.png") as string
];

class GoalsContentView {
  render(root: HTMLElement) {
    let template = ``;

    const { text, title } = getGoalsLang();

    if (text && title) {
      for (let i = 0; i < title.length; i++) {
        template += `<div class="goal">
                        <div class="goal__img">
                            <img src="${images[i]}" alt="Goal Image">
                        </div>
                        <div class="goal__content ${i % 2 ? "order" : ""}">
                            <h2 class="goal__title title">${title[i]}</h2>
                            <p class="goal__text text">${text[i]}</p>
                        </div>
                    </div>`;
      }
    }

    root.innerHTML = template;
  }
}

export default new GoalsContentView();
