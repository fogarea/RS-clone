const trainingImgFirst =
  require("../../assets/svg/trainings/training1.svg") as string;
const trainingImgSecond =
  require("../../assets/svg/trainings/training2.svg") as string;
const trainingImgThird =
  require("../../assets/svg/trainings/training3.svg") as string;
const trainingImgFourth =
  require("../../assets/svg/trainings/training4.svg") as string;
const trainingImgFifth =
  require("../../assets/svg/trainings/training5.svg") as string;
const trainingImgSixth =
  require("../../assets/svg/trainings/training6.svg") as string;

class TrainingsContentView {
  render(root: HTMLElement) {
    root.innerHTML = `<div class="training">
                            <div class="training__img">
                                 <img src="${trainingImgFirst}" alt="Training Image">
                            </div>
                            <div class="training__content">
                                <h4 class="training__title">Lean & Tone</h4>
                                <p class="training__text">I’m “skinny fat”. I want to add learn muscle in the right way</p>
                                <div class="training_button">
                                    <button class="button button--colored button--large">Try it out</button>
                                </div>
                            </div>
                        </div>

                        <div class="training">
                            <div class="training__img">
                                <img src="${trainingImgSecond}" alt="Training Image">
                            </div>
                            <div class="training__content">
                                <h4 class="training__title">Improve Shape</h4>
                                <p class="training__text">I have a low amount of body fat and need / want to build more muscle</p>
                                <div class="training_button">
                                    <button class="button button--colored button--large">Try it out</button>
                                </div>
                            </div>
                        </div>

                        <div class="training">
                            <div class="training__img">
                                <img src="${trainingImgThird}" alt="Training Image">
                            </div>
                            <div class="training__content">
                                <h4 class="training__title">Lose a Fat</h4>
                                <p class="training__text">I want to drop 20 lbs of fat and gain muscle mass</p>
                                <div class="training_button">
                                    <button class="button button--colored button--large">Try it out</button>
                                </div>
                            </div>
                        </div>

                        <div class="training">
                            <div class="training__img">
                                <img src="${trainingImgFourth}" alt="Training Image">
                            </div>
                            <div class="training__content">
                                <h4 class="training__title">Pump the Press</h4>
                                <p class="training__text">To pump up the press, enough of a few exercises</p>
                                <div class="training_button">
                                    <button class="button button--colored button--large">Try it out</button>
                                </div>
                            </div>
                        </div>

                        <div class="training">
                            <div class="training__img">
                                <img src="${trainingImgFifth}" alt="Training Image">
                            </div>
                            <div class="training__content">
                                <h4 class="training__title">Take Up Meditation</h4>
                                <p class="training__text">Meditation is a type of mind-body complementary medicine</p>
                                <div class="training_button">
                                    <button class="button button--colored button--large">Try it out</button>
                                </div>
                            </div>
                        </div>

                        <div class="training">
                            <div class="training__img">
                                <img src="${trainingImgSixth}" alt="Training Image">
                            </div>
                            <div class="training__content">
                                <h4 class="training__title">Practice Yoga</h4>
                                <p class="training__text">Yoga is a practice that connects the body, breath, and mind</p>
                                <div class="training_button">
                                    <button class="button button--colored button--large">Try it out</button>
                                </div>
                            </div>
                        </div>`;
  }
}

export default new TrainingsContentView();
