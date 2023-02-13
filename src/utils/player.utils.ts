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
    this.render();
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

  set currentTraining(newTraning) {
    this.trainings[this.training.id] = newTraning;
  }

  createLayout(root: HTMLElement) {
    this.layout.player = document.createElement("div");
    this.layout.player.classList.add("yt-player");
    this.layout.player.setAttribute(
      "style",
      `background-image: url("https://img.youtube.com/vi/${this.training.media}/hqdefault.jpg");`
    );
    this.layout.player.id = "player-" + this.training.media;

    root.append(this.layout.player);
  }

  render() {
    let text;
    let type;

    if (this.currentTraining.finished) {
      // finished
      text = "repeat workout";
      type = "button--colored button--shine";
    } else if (this.currentTraining.currentTime) {
      // started
      text = "continue workout";
      type = "button--colored button--shine";
    } else {
      // new
      text = "start workout";
      type = "button--colored button--shine";
    }

    button.render(this.layout.player, type, text, () => this.createPlayer());
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

  private makeFullScreen() {
    if (!this.fullscreened) {
      this.fullscreened = true;
      const iPlayer = document.querySelector(`#${this.layout.player.id}`);
      if (iPlayer) iPlayer.requestFullscreen();
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

  private finishTraining() {
    this.stackProgress(false);
    this.updateTrainings("drop");
    progressController.finishTraning(this.training.id);
  }
}

export default Player;
