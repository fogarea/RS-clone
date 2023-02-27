import navigationModel from "model/navigation.model";
import { state } from "store/state";
import { Layout } from "types/layout.types";
import { MediaEndpoint } from "types/media.endpoint.types";

interface Image {
  src: string;
  size: string;
}

const path =
  navigationModel.route.protocol +
  navigationModel.route.host +
  state.basePath +
  "assets/";

const arrayImage: Image[] = [
  { src: path + "img/404.jpg", size: "215" },
  { src: path + "img/team/ilya.jpg", size: "119" },
  { src: path + "img/team/kostya.jpg", size: "205" },
  { src: path + "img/team/nataliya.jpg", size: "166" },
  { src: path + "svg/color-scheme/dark.svg", size: "0.172" },
  { src: path + "svg/color-scheme/light.svg", size: "0.620" },
  { src: path + "svg/github/github.svg", size: "2.16" },
  { src: path + "svg/logo/logo-dark.svg", size: "13.9" },
  { src: path + "svg/logo/logo-light.svg", size: "13.9" },
  { src: path + "img/landing/promo.png", size: "50.76" },
  { src: path + "img/landing/promo2.png", size: "18.4" },
  { src: path + "img/landing/promo3.png", size: "19.2" },
  { src: path + "img/landing/promo4.png", size: "19.9" },
  { src: path + "img/landing/promo5.png", size: "19.7" },
  { src: path + "svg/rs/logo_rs_large.svg", size: "15.8" },
  { src: path + "svg/rs/logo_rs.svg", size: "10.38" },
  { src: path + "svg/achievements/calendar.svg", size: "453" },
  { src: path + "svg/achievements/dumbbells.svg", size: "9.29" },
  { src: path + "svg/achievements/fire.svg", size: "1.22" },
  { src: path + "svg/achievements/salad.svg", size: "73.5" },
  { src: path + "svg/achievements/steps.svg", size: "6.2" },
  { src: path + "svg/achievements/water.svg", size: "3.65" },
  { src: path + "svg/arrow/arrow-left-dark.svg", size: "367" },
  { src: path + "svg/arrow/arrow-left-dark-hover.svg", size: "367" },
  { src: path + "svg/arrow/arrow-left-light.svg", size: "367" },
  { src: path + "svg/arrow/arrow-left-light-hover.svg", size: "367" },
  { src: path + "svg/burger-menu/burger-menu-icon-dark.svg", size: "677" },
  { src: path + "svg/burger-menu/burger-menu-icon-light.svg", size: "367" },
  { src: path + "svg/burger-menu/close-icon-light.svg", size: "367" },
  { src: path + "svg/burger-menu/close-icon-modal-light.svg", size: "367" },
  { src: path + "svg/meals/breakfast.svg", size: "99.74" },
  { src: path + "svg/meals/lunch.svg", size: "117" },
  { src: path + "svg/meals/dinner.svg", size: "101" },
  { src: path + "svg/nutrition/calories.svg", size: "1.38" },
  { src: path + "svg/nutrition/fats.svg", size: "4" },
  { src: path + "svg/nutrition/proteins.svg", size: "10" },
  { src: path + "svg/nutrition/calories.svg", size: "1.38" },
  { src: path + "svg/nutrition/fats.svg", size: "4" },
  { src: path + "svg/nutrition/proteins.svg", size: "10" },
  { src: path + "svg/workouts/abs.svg", size: "15" },
  { src: path + "svg/workouts/beginners.svg", size: "16" },
  { src: path + "svg/workouts/cardio.svg", size: "21" },
  { src: path + "svg/workouts/equipments.svg", size: "20" },
  { src: path + "svg/workouts/fat-burning.svg", size: "22" },
  { src: path + "svg/workouts/fullbody.svg", size: "27" },
  { src: path + "svg/workouts/gym.svg", size: "20" },
  { src: path + "svg/workouts/intense.svg", size: "20" },
  { src: path + "svg/workouts/meditation.svg", size: "17" },
  { src: path + "svg/workouts/no-equipments.svg", size: "11" },
  { src: path + "svg/workouts/no-jumping.svg", size: "20" },
  { src: MediaEndpoint.PROGRAM + "programs/0.svg", size: "23.5" },
  { src: MediaEndpoint.PROGRAM + "programs/1.svg", size: "20.5" },
  { src: MediaEndpoint.PROGRAM + "programs/2.svg", size: "22.3" },
  { src: MediaEndpoint.PROGRAM + "programs/3.svg", size: "14.9" },
  { src: MediaEndpoint.PROGRAM + "programs/4.svg", size: "16.8" },
  { src: MediaEndpoint.PROGRAM + "programs/5.svg", size: "17.4" }
];

class Preloader {
  layout = {} as Layout;

  repeats = 0;

  timer: ReturnType<typeof setTimeout> | null = null;

  init(root: HTMLElement, withNumbers = true) {
    this.render(root, withNumbers);
    this.loadPreloader();

    if (withNumbers) {
      this.renderImgContainer();
      document.body.classList.remove("non-transition");
    }
  }

  render(root: HTMLElement, withNumbers = true) {
    const localStorageScheme = localStorage.getItem("color-scheme");
    const scheme = localStorageScheme
      ? `${JSON.parse(localStorageScheme)}`
      : "false";

    this.layout.preloader = document.createElement("div");
    this.layout.preloader.id = "preloader";
    this.layout.preloader.classList.add("preloader");
    if (!withNumbers) this.layout.preloader.classList.add("preloader-only");

    this.layout.preloader.style.background =
      scheme === "true"
        ? "linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%)"
        : "#2a2e3d";

    this.layout.loader = document.createElement("div");
    this.layout.loader.classList.add("preloader__loader");
    this.layout.loader.style.borderColor = "#fcfcff";
    this.layout.loader.style.borderTopColor =
      scheme === "true" ? "#7079fe" : "#8388cf";

    this.layout.preloaderPercents = document.createElement("span");
    this.layout.preloaderPercents.classList.add("preloader__percents");
    this.layout.preloaderPercents.style.color =
      scheme === "true" ? "#7079fe" : "#8388cf";

    this.layout.percentsNumber = document.createElement("span");
    this.layout.percentsNumber.classList.add("percents__number");
    this.layout.percentsNumber.textContent = "0";

    this.layout.percents = document.createElement("span");
    this.layout.percents.textContent = " %";

    this.layout.preloaderPercents.append(
      this.layout.percentsNumber,
      this.layout.percents
    );

    this.layout.preloader.append(this.layout.loader);

    if (withNumbers)
      this.layout.preloader.append(this.layout.preloaderPercents);

    root.append(this.layout.preloader);
  }

  renderImgContainer() {
    this.layout.imgContainer = document.createElement("div");
    this.layout.imgContainer.classList.add("img__container");

    arrayImage.forEach((value) => {
      const img = document.createElement("img");
      img.classList.add("img");
      img.src = value.src;

      this.layout.imgContainer.append(img);
    });
    document.body.append(this.layout.imgContainer);
  }

  loadPreloader() {
    this.timer = setTimeout(() => {
      this.finishPreloader();
    }, 10000);

    document.body.classList.add("body--scroll__disable");

    document.addEventListener("DOMContentLoaded", () => {
      let totalSize = 0;
      let percent = 0;
      const percentAll: number[] = [];
      let loaded = 0;

      arrayImage.forEach((value) => {
        totalSize += parseFloat(value.size);
      });

      arrayImage.forEach((value) => {
        percent = (parseFloat(value.size) * 100) / totalSize;
        percentAll.push(percent);
      });

      const imageFiles = document.querySelectorAll(".img");

      imageFiles.forEach((file, index) => {
        file.addEventListener("load", () => {
          loaded += +percentAll[index];

          if (loaded > 80) loaded = 80;
          this.layout.percentsNumber.innerHTML = loaded.toFixed(0);

          if (loaded >= 80) {
            this.finishPreloader();
          }
        });
      });
    });
  }

  finishPreloader(withForce = "") {
    if (!this.timer && !withForce) return;

    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    if (!state.loaded) {
      this.repeats++;
      let totalLoaded = 80 + this.repeats;
      if (totalLoaded > 100) totalLoaded = 100;

      this.layout.percentsNumber.innerHTML = totalLoaded.toFixed(0);

      setTimeout(() => {
        this.finishPreloader("force");
      }, 200);

      return;
    }

    this.layout.percentsNumber.innerHTML = "100";

    setTimeout(() => {
      const preloader = document.getElementById("preloader");

      if (!preloader) {
        return console.log("error");
      }

      preloader.classList.add("hide-preloader");
      this.layout.percentsNumber.innerHTML = "100";
      document.body.classList.remove("body--scroll__disable");
      if (this.layout.imgContainer) this.layout.imgContainer.remove();
    }, 500);
  }
}

export default new Preloader();
