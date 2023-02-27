import { getAboutLang } from "../../lang/about.lang";

const images = [
  require("../../assets/img/team/ilya.jpg") as string,
  require("../../assets/img/team/kostya.jpg") as string,
  require("../../assets/img/team/nataliya.jpg") as string
];

const links = [
  "https://github.com/Elijah-I",
  "https://github.com/fogarea",
  "https://github.com/nataliyasamkevich"
];

class AboutContentView {
  render(root: HTMLElement) {
    let template = ``;

    const { memberName, memberRole } = getAboutLang();

    if (memberName && memberRole) {
      for (let i = 0; i < memberName.length; i++) {
        template += `<div class="team-member">
                            <div class="team-member__img">
                                <img src="${images[i]}" alt="Team Member Photo">
                            </div>
                            <div class="team-member__content">
                                <h4 class="team-member__title title">${memberName[i]}</h4>
                                <div class="team-member__credentials">
                                    <p class="team-member__role">${memberRole[i]}</p>
                                    <a class="team-member__gh" href="${links[i]}"><span class="icon icon--gh"></span></a>
                                </div>
                            </div>
                        </div>`;
      }
    }

    root.innerHTML = template;
  }
}

export default new AboutContentView();
