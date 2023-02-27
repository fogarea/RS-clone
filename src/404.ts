const img404Src = require("./assets/img/404.jpg") as string;

import { Routing } from "types/route.types";
import navigationModel from "model/navigation.model";
import { state } from "store/state";

if (
  Object.values(Routing).includes(navigationModel.route.resource as Routing)
) {
  localStorage.setItem("restore.route", navigationModel.route.href);
  const win: Window = window;
  win.location = navigationModel.route.origin + state.basePath;
} else {
  document.body.setAttribute(
    "style",
    "width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden;"
  );
  const img404 = document.createElement("img");
  img404.setAttribute("style", "max-width: 90vw; max-height: 90vh;");
  img404.src = img404Src;

  document.body.append(img404);
}
