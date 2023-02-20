import { getSchoolLang } from "lang/school.lang";

const schoolLogo =
  require("../../../assets/svg/rs/logo_rs_large.svg") as string;

class SchoolContentView {
  render(root: HTMLElement) {
    const { title, text } = getSchoolLang();

    if (title && text) {
      root.innerHTML = `<div class="school__img">
                            <img src="${schoolLogo}" alt="School Photo">
                        </div>
                        <div class="school__desc">
                            <p class="school__text">${text[0]}
                                <a class="school__link" href="https://rs.school/js/">RS School</a>
                                ${text[1]}</p>
                            <p class="school__text"><a class="school__link" href="https://rs.school/js/">RS School</a>  ${text[2]}</p>
                        </div>`;
    }
  }
}

export default new SchoolContentView();
