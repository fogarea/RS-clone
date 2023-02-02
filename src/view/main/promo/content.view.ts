class PromoContentView {
  render(root: HTMLElement) {
    root.innerHTML = `<h1 class="promo__title title">Everybody <span class="promo__title-char">CAN</span> train!</h1>
                         <p class="promo__text text">Dashboard, workout tracker and meal planner, all in one place! Try our app right now. <br> Click the link below.</p>`;
  }
}

export default new PromoContentView();
