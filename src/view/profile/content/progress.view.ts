import { state } from "../../../store/state";
import { getProfileProgressLang } from "../../../lang/profile/progress.profile.lang";

class ProgressView {
  render(root: HTMLElement) {
    const { title, caloriesText, trainings } = getProfileProgressLang();
    const { calories, finished } = state.user.progress;

    root.innerHTML = `<div class="progress__wrapper cards__container">
                            <h3 class="progress__title title">${title}</h3>
                            <div class="progress__content">
                                <div class="progress__item progress-item">
                                    <span class="progress-item__number">${Math.ceil(
                                      calories
                                    )}</span>
                                    <span class="progress-item__text">${caloriesText}</span>
                                </div>
                                <div class="progress__item progress-item">
                                    <span class="progress-item__number">${
                                      finished.length
                                    }</span>
                                    <span class="progress-item__text">${trainings}</span>
                                </div>
                            </div>
                        </div>`;
  }
}

export default new ProgressView();
