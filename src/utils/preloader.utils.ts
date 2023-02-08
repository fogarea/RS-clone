import navigationModel from "model/navigation.model";
import { state } from "store/state";
import { Layout } from "types/layout.types";

interface Image {
  src: string;
  size: string;
}
const githubPath = "https://raw.githubusercontent.com/fogarea/assets/fitness/";

const path =
  navigationModel.route.protocol +
  navigationModel.route.host +
  state.basePath +
  "assets/";

const arrayImage: Image[] = [
  { src: path + "img/404.jpg", size: "215" },
  { src: path + "img/team/ilya.jpeg", size: "18.6" },
  { src: path + "img/team/kostya.png", size: "317" },
  { src: path + "img/team/nataliya.jpeg", size: "39.1" },
  { src: path + "svg/color-scheme/dark.svg", size: "0.172" },
  { src: path + "svg/color-scheme/light.svg", size: "0.620" },
  // { src:  path +  "svg/github/gh.svg", size: "2.15" },
  // { src: path +  "svg/github/github-face.svg", size: "1.65" },
  { src: path + "svg/github/github.svg", size: "2.16" },
  { src: path + "svg/logo/logo-dark.svg", size: "13.9" },
  { src: path + "svg/logo/logo-light.svg", size: "13.9" },
  { src: path + "svg/promo/promo.svg", size: "26.8" },
  { src: path + "svg/promo/promo2.svg", size: "14.3" },
  { src: path + "svg/promo/promo3.svg", size: "12.1" },
  { src: path + "svg/promo/promo4.svg", size: "10.8" },
  { src: path + "svg/promo/promo5.svg", size: "17.9" },
  { src: path + "svg/rs/logo_rs.svg", size: "14.9" },
  { src: githubPath + "programs/0.svg", size: "23.5" },
  { src: githubPath + "programs/1.svg", size: "20.5" },
  { src: githubPath + "programs/2.svg", size: "22.3" },
  { src: githubPath + "programs/3.svg", size: "14.9" },
  { src: githubPath + "programs/4.svg", size: "16.8" },
  { src: githubPath + "programs/5.svg", size: "17.4" }
];

class Preloader {
  layout = {} as Layout;

  timer: ReturnType<typeof setTimeout> | null = null;

  init(root: HTMLElement) {
    this.render(root);
    this.loadPreloader();
    this.renderImgContainer();
    document.body.classList.remove("non-transition");
  }

  render(root: HTMLElement) {
    this.layout.preloader = document.createElement("div");
    this.layout.preloader.id = "preloader";
    this.layout.preloader.classList.add("preloader");

    this.layout.loader = document.createElement("div");
    this.layout.loader.classList.add("preloader__loader");

    this.layout.preloaderPercents = document.createElement("span");
    this.layout.preloaderPercents.classList.add("preloader__percents");

    this.layout.percentsNumber = document.createElement("span");
    this.layout.percentsNumber.classList.add("percents__number");
    this.layout.percentsNumber.textContent = "0";

    this.layout.percents = document.createElement("span");
    this.layout.percents.textContent = " %";

    this.layout.preloaderPercents.append(
      this.layout.percentsNumber,
      this.layout.percents
    );
    this.layout.preloader.append(
      this.layout.loader,
      this.layout.preloaderPercents
    );
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

    document.body.classList.add("non-scroll");

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

          this.layout.percentsNumber.innerHTML = loaded.toFixed(0);

          if (loaded >= 99) {
            if (this.timer) clearTimeout(this.timer);

            this.finishPreloader();
          }
        });
      });
    });
  }

  finishPreloader() {
    const preloader = document.getElementById("preloader");
    if (!preloader) {
      return console.log("error");
    }

    preloader.classList.add("hide-preloader");
    this.layout.percentsNumber.innerHTML = "100";
    document.body.classList.remove("non-scroll");
  }
}

export default new Preloader();
