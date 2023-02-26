import { state } from "../../store/state";
import navigationController from "../../controller/navigation.controller";

class BackButton {
  render(text: string, route: string) {
    const backButton = document.createElement("span");
    backButton.className = "aside__back-btn";

    const icon = document.createElement("span");
    icon.className = "icon icon--arrow";

    const backBtn = document.createElement("a");
    backBtn.innerText = text;
    backBtn.href = state.basePath + route;

    backButton.append(icon, backBtn);

    backButton.addEventListener("click", (e: MouseEvent) => {
      if (e.target instanceof HTMLSpanElement) {
        const buttonRoute = (e.target.nextElementSibling as HTMLAnchorElement)
          .href;
        navigationController.applyRoute(buttonRoute);
      }
      if (e.target instanceof HTMLAnchorElement) {
        navigationController.route(e);
      }
    });

    return backButton;
  }
}

export default new BackButton();
