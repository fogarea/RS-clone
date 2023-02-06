import { getTrainingsLang } from "../../lang/trainings.lang";

const images = [
  require("../../assets/svg/trainings/training1.svg") as string,
  require("../../assets/svg/trainings/training2.svg") as string,
  require("../../assets/svg/trainings/training3.svg") as string,
  require("../../assets/svg/trainings/training4.svg") as string,
  require("../../assets/svg/trainings/training5.svg") as string,
  require("../../assets/svg/trainings/training6.svg") as string
];

class TrainingsContentView {
  render(root: HTMLElement) {
    let template = ``;

    const { programTitle, programDesc, btn } = getTrainingsLang();

    if (programTitle && programDesc) {
      for (let i = 0; i < programTitle.length; i++) {
        template += `<div class="training">
                            <div class="training__img">
                                 <img src="${images[i]}" alt="Training Image">
                            </div>
                            <div class="training__content">
                                <h4 class="training__title">${programTitle[i]}</h4>
                                <p class="training__text">${programDesc[i]}</p>
                                <div class="training_button">
                                    <button class="button button--colored button--large">${btn}</button>
                                </div>
                            </div>
                        </div>`;
      }
    }

    root.innerHTML = template;
  }
}

export default new TrainingsContentView();
