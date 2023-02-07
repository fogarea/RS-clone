import { state } from "store/state";
import { getProgramsAuthLang } from "../../lang/programs/programs.auth.lang";

class ProgramsContentView {
  render(root: HTMLElement) {
    let template = ``;

    state.programs.forEach(({ title, description, media, id }) => {
      template += `<div class="training">
                            <div class="training__img">
                                 <img src="${media}" alt="Training Image">
                            </div>
                            <div class="training__content">
                                <h4 class="training__title">${title}</h4>
                                <p class="training__text">${description}</p>
                                ${
                                  state.user.authorized
                                    ? this.renderButton(id)
                                    : ""
                                }
                            </div>
                        </div>`;
    });

    root.innerHTML = template;
  }

  renderButton(id: string) {
    const { btn } = getProgramsAuthLang();
    return `<div class="training_button">
                <button class="button button--colored button--large" id="${id}">${btn}</button>
            </div>`;
  }
}

export default new ProgramsContentView();
