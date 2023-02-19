import YTP = require("yt-player");
import { Layout } from "types/layout.types";
import button from "../view/components/button";
import { Training, Trainings } from "types/training.types";
import progressController from "controller/progress.controller";

class Player {
  layout = {} as Layout;

  training = {} as Training;

  trainings = {} as Trainings;

  player: YTP | null = null;

  timer: ReturnType<typeof setTimeout> | null = null;

  fullscreened = false;

  create(root: HTMLElement, training: Training) {
    this.training = training;

    this.getTrainings();
    this.createLayout(root);
    this.renderPlayButton();
  }

  getTrainings() {
    this.trainings = JSON.parse(localStorage.getItem("trainings") || "{}");

    this.currentTraining ??= {
      finished: false,
      calories: 0,
      watchedTime: 0,
      currentTime: 0
    };
  }

  get currentTraining() {
    return this.trainings[this.training.id];
  }

  set currentTraining(newTraining) {
    this.trainings[this.training.id] = newTraining;
  }

  createLayout(root: HTMLElement) {
    this.layout.player = document.createElement("div");
    this.layout.player.classList.add("yt-player");
    this.layout.player.setAttribute(
      "style",
      `background-image: url("https://img.youtube.com/vi/${this.training.media}/hqdefault.jpg");`
    );
    this.layout.player.id = "player-" + this.training.media;

    this.layout.button = document.createElement("div");
    this.layout.button.classList.add("yt-player__button");

    this.layout.player.append(this.layout.button);

    root.append(this.layout.player);
  }

  renderPlayButton() {
    button.render(
      this.layout.button,
      "button__icon icon icon--youtube",
      "",
      () => {
        this.createPlayer();
      }
    );
  }

  private createPlayer() {
    this.player = new YTP(`#${this.layout.player.id}`, {
      annotations: false,
      related: false
    });

    this.player.load(
      this.training.media,
      false,
      this.currentTraining.currentTime
    );

    this.player.on("cued", () => this.makeFullScreen());
    this.player.on("playing", () => this.stackProgress(true));
    this.player.on("paused", () => this.stackProgress(false));
    this.player.on("ended", () => this.finishTraining());
  }

  private async makeFullScreen() {
    if (!this.fullscreened) {
      this.fullscreened = true;
      const iPlayer = document.querySelector(`#${this.layout.player.id}`);
      if (iPlayer) await iPlayer.requestFullscreen();
    }
  }

  private stackProgress(active: boolean) {
    if (active)
      this.timer = setTimeout(() => {
        this.getTrainings();
        this.updateTrainings();
        this.stackProgress(true);
      }, 1000);
    else if (this.timer) clearTimeout(this.timer);
  }

  updateTrainings(drop = "") {
    if (!this.player) return;

    this.currentTraining.watchedTime += 1;
    this.currentTraining.currentTime = drop
      ? 0
      : Math.round(this.player.getCurrentTime());
    this.currentTraining.calories = +(
      (this.currentTraining.watchedTime * this.training.calories) /
      this.player.getDuration()
    ).toFixed(3);
    this.currentTraining.finished = this.player.getState() === "ended";

    localStorage.setItem("trainings", JSON.stringify(this.trainings));
  }

  private async finishTraining() {
    this.stackProgress(false);
    this.updateTrainings("drop");
    await progressController.finishTraining(this.training.id);
  }
}

export default Player;
