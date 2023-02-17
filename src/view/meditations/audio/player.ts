import { Meditation } from "types/meditation.types";
import { Audio } from "./audio";
import { audioCollector } from "./audio.collector";

export class Player {
  container: HTMLElement;

  self: HTMLAudioElement;

  timeLeft: HTMLElement | null;

  progress: HTMLElement | null;

  progressBar: HTMLElement | null;

  sound: HTMLElement | null;

  soundBar: HTMLElement | null;

  playButton: HTMLElement | null;

  range: HTMLElement | null;

  active: boolean;

  duration: number;

  tm: ReturnType<typeof setTimeout> | null;

  timer: ReturnType<typeof setTimeout> | null;

  id: string;

  meditation?: Meditation;

  constructor(audio: Audio, id: string, meditation?: Meditation) {
    this.container = audio.self;
    this.self = this.container.querySelector(".audio-player")!;

    this.meditation = meditation;
    this.timeLeft = null;
    this.progress = null;
    this.progressBar = null;
    this.active = false;
    this.duration = 0;
    this.tm = null;
    this.timer = null;
    this.sound = null;
    this.soundBar = null;
    this.range = null;
    this.playButton = null;
    this.id = id;

    audioCollector.add(this);
  }

  defineControls(duration: number) {
    this.duration = duration;
    this.self.currentTime = 0;

    this.sound = this.container.querySelector(".a-sound")!;
    this.soundBar = this.container.querySelector(".a-sound-bar")!;
    this.playButton = this.container.querySelector(".play")!;
    this.timeLeft = this.container.querySelector(".a-time")!;
    this.range = this.container.querySelector(".a-progress-range")!;
    this.progress = this.container.querySelector(".a-progress")!;
    this.progressBar = this.container.querySelector(".a-progress-bar")!;

    this.range.addEventListener("input", (e: Event) => this.trackTo(e));
    this.sound.addEventListener("click", (e: MouseEvent) => this.soundTo(e));

    this.trackEvents();
  }

  togglePlay() {
    if (this.playButton) this.playButton.classList.toggle("pause");
    this.active = !this.active;
    if (this.active) this.play();
    else this.pause();
  }

  play() {
    audioCollector.stop(this.id);

    this.self.play();
    this.trackEvents();
  }

  pause() {
    if (this.tm) clearTimeout(this.tm);
    this.self.pause();
  }

  stop() {
    this.self.pause();
    this.self.currentTime = 0;
  }

  trackTo(e: Event) {
    if (!e.target) return;
    if (!(e.target instanceof HTMLInputElement)) return;

    this.self.currentTime = (+e.target.value * this.duration) / 100;
    this.trackEvents();

    if (!this.active) {
      if (this.self.currentTime === this.duration) {
        if (this.meditation) audioCollector.playNext(this.id, this.meditation);
        else this.self.currentTime = 0;
      } else this.togglePlay();
    }
  }

  withAudio(e: Event, withAudio: boolean) {
    let action = false;
    const delay = withAudio ? 0 : 1000;
    if (this.timer) clearTimeout(this.timer);

    if (withAudio) {
      if (e.target)
        if (e.target instanceof HTMLElement) {
          if (e.target.closest("a-sound") || e.target.closest("volume"))
            action = true;
          if (
            e.target.classList.contains("a-sound") ||
            e.target.classList.contains("volume")
          )
            action = true;
        }
    }

    if (!withAudio) action = true;

    if (action)
      this.timer = setTimeout(() => {
        this.container.classList[withAudio ? "add" : "remove"](
          "player-with-audio"
        );
      }, delay);
  }

  soundTo(e: MouseEvent) {
    e.stopPropagation();

    const soundLineWidth = this.sound
      ? this.sound.getBoundingClientRect().width
      : 0;
    let soundToSeek = Math.ceil((e.offsetX / soundLineWidth) * 100) / 100;

    if (soundToSeek < 0.1) soundToSeek = 0;
    if (soundToSeek > 0.9) soundToSeek = 1;

    this.self.volume = soundToSeek;

    this.trackEvents();
  }

  trackEvents() {
    const totalTime = this.duration;
    const currentTime = Math.round(this.self.currentTime);
    const timeLeft = Math.round(totalTime - currentTime);
    const timePassed = Math.round(
      Math.min((currentTime / totalTime) * 100, 100)
    );

    if (this.timeLeft) this.timeLeft.innerHTML = this.ms_format(timeLeft);
    if (this.range && this.range instanceof HTMLInputElement)
      this.range.value = `${timePassed}`;
    if (this.soundBar)
      this.soundBar.setAttribute("style", `width: ${this.self.volume * 100}%`);
    if (this.progressBar)
      this.progressBar.setAttribute("style", `width:  ${timePassed}%`);

    if (timePassed == 100 && this.active) {
      if (this.meditation) audioCollector.playNext(this.id, this.meditation);
    }

    this.tm = setTimeout(() => this.trackEvents(), 1000);
  }

  ms_format(num: number) {
    const min = Math.floor(num / 60);
    const sec = num - min * 60;
    return `${this.pad(min, 2)}:${this.pad(sec, 2)}`;
  }

  pad(num: number, ln: number) {
    return num.toString().padStart(ln, "0");
  }
}
