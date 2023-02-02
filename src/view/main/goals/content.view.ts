class GoalsContentView {
  render(root: HTMLElement) {
    root.innerHTML = `<div class="goal">
                        <div class="goal__img goal__first-img"></div>
                        <div class="goal__content">
                            <h2 class="goal__title title">Track Your Goal</h2>
                            <p class="goal__text text">Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>
                        </div>
                    </div>

                    <div class="goal">
                        <div class="goal__img goal__second-img"></div>
                        <div class="goal__content order">
                            <h2 class="goal__title title">Get Burn</h2>
                            <p class="goal__text text">Let’s keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever</p>
                        </div>
                    </div>

                    <div class="goal">
                        <div class="goal__img goal__third-img"></div>
                        <div class="goal__content">
                            <h2 class="goal__title title">Eat Well</h2>
                            <p class="goal__text text">Let's start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun</p>
                        </div>
                    </div>

                    <div class="goal">
                        <div class="goal__img goal__fourth-img"></div>
                        <div class="goal__content order">
                            <h2 class="goal__title title">Improve Sleep</h2>
                            <p class="goal__text text">Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning</p>
                        </div>
                    </div>`;
  }
}

export default new GoalsContentView();
