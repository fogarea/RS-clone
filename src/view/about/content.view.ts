const imgIlya = require("../../assets/img/team/ilya.jpeg") as string;
const imgKostya = require("../../assets/img/team/kostya.png") as string;
const imgNataliya = require("../../assets/img/team/nataliya.jpeg") as string;

class AboutContentView {
  render(root: HTMLElement) {
    root.innerHTML = `<div class="team-member">
                            <div class="team-member__img">
                                <img src="${imgIlya}" alt="Team Member Photo">
                            </div>
                            <div class="team-member__content">
                                <h4 class="team-member__title title">Il'ya Ivanik</h4>
                                <div class="team-member__credentials">
                                    <p class="team-member__role">Team lead</p>
                                    <a class="team-member__gh" href="https://github.com/Elijah-I"><span class="icon icon--gh"></span></a>
                                </div>
                            </div>
                        </div>
                        <div class="team-member">
                            <div class="team-member__img">
                                <img src="${imgKostya}" alt="Team Member Photo">
                            </div>
                            <div class="team-member__content">
                                <h4 class="team-member__title title">Konstantin Smirnov</h4>
                                <div class="team-member__credentials">
                                    <p class="team-member__role">Developer</p>
                                    <a class="team-member__gh" href="https://github.com/fogarea"><span class="icon icon--gh"></span></a>
                                </div>
                            </div>
                        </div>
                        <div class="team-member">
                            <div class="team-member__img">
                                <img src="${imgNataliya}" alt="Team Member Photo">
                            </div>
                            <div class="team-member__content">
                                <h4 class="team-member__title title">Nataliya Samkevich</h4>
                                <div class="team-member__credentials">
                                    <p class="team-member__role">Developer</p>
                                    <a class="team-member__gh" href="https://github.com/nataliyasamkevich"><span class="icon icon--gh"></span></a>
                                </div>
                            </div>
                        </div>`;
  }
}

export default new AboutContentView();
