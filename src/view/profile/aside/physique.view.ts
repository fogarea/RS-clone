import { state } from "../../../store/state";
import ageUtils from "../../../utils/age.utils";
import { getProfilePhysiqueLang } from "../../../lang/profile/physique.profile.lang";

class PhysiqueView {
  render(root: HTMLElement) {
    const { title, heightText, weightText, ageText } = getProfilePhysiqueLang();
    const { height, weight, birthday } = state.user.profile;

    root.innerHTML = `<div class="physique__wrapper cards__container">
                            <h3 class="physique__title title">${title}</h3>
                            <div class="physique__content">
                                <div class="physique__card">
                                    <span class="physique__data">${height}</span>
                                    <span class="physique__text">${heightText}</span>
                                </div>
                                <div class="physique__card">
                                    <span class="physique__data">${weight}</span>
                                    <span class="physique__text">${weightText}</span>
                                </div>
                                <div class="physique__card">
                                    <span class="physique__data">${ageUtils.getAge(
                                      birthday
                                    )}</span>
                                    <span class="physique__text">${ageText}</span>
                                </div>
                            </div>
                        </div>`;
  }
}

export default new PhysiqueView();
