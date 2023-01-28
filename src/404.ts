const img404Src = require("./assets/img/404.jpg") as string;

import { Routing } from "types/route.types";
import navigationModel from "model/navigation.model";
import { state } from "store/state";

if (Object.values(Routing).includes(navigationModel.route.path as Routing)) {
  localStorage.setItem("restore.route", navigationModel.route.href);
  const win: Window = window;
  win.location = navigationModel.route.origin + state.basePath;
} else {
  const img404 = document.createElement("img");
  img404.src = img404Src;

  document.body.append(img404);
}
