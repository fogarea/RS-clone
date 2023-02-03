const schoolLogo = require("../../../assets/svg/rs/logo_rs.svg") as string;

class SchoolContentView {
  render(root: HTMLElement) {
    root.innerHTML = `<div class="school__img">
                            <img src="${schoolLogo}" alt="School Photo">
                        </div>
                        <div class="school__desc">
                            <p class="school__text">The application is developed for
                                <a class="school__link" href="https://rs.school/js/">RS School</a>
                                final task.</p>
                            <p class="school__text"><a class="school__link" href="https://rs.school/js/">RS School</a>  is free-of-charge and community-based education program conducted by The Rolling Scopes developer community since 2013.</p>
                        </div>`;
  }
}

export default new SchoolContentView();
