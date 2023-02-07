import { state } from "store/state";
import { getProgramsLang } from "../../lang/programs.lang";

class ProgramsContentView {
  render(root: HTMLElement) {
    const { btn } = getProgramsLang();

    let template = ``;

    state.programs.forEach(({ title, description, media }) => {
      template += `<div class="training">
                            <div class="training__img">
                                 <img src="${media}" alt="Training Image">
                            </div>
                            <div class="training__content">
                                <h4 class="training__title">${title}</h4>
                                <p class="training__text">${description}</p>
                                <div class="training_button">
                                    <button class="button button--colored button--large">${btn}</button>
                                </div>
                            </div>
                        </div>`;
    });

    root.innerHTML = template;
  }
}

export default new ProgramsContentView();
