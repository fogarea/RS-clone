import { Meditation } from "types/meditation.types";
import { Player } from "./player";
import { MediaEndpoint } from "types/media.endpoint.types";

export class Audio {
  src: string;

  self: HTMLElement;

  player: Player;

  constructor(src: string, id: string, meditation?: Meditation) {
    this.src = MediaEndpoint.SOUND + src + "?raw=true";

    this.self = this.create();

    this.player = new Player(this, id, meditation);
  }

  create(): HTMLElement {
    const playButton = document.createElement("div");
    playButton.classList.add("play", "player-icon");
    playButton.addEventListener("click", () => this.player.togglePlay());

    const volumeButton = document.createElement("div");
    volumeButton.classList.add("volume", "player-icon");

    const audio = document.createElement("audio");
    audio.classList.add("audio-player");
    audio.src = this.src;
    audio.addEventListener("loadedmetadata", () =>
      this.player.defineControls(audio.duration)
    );

    const time = document.createElement("div");
    time.classList.add("a-time");
    time.innerHTML = "00:00";
    const soundBar = document.createElement("div");
    soundBar.classList.add("a-sound-bar");
    const progressBar = document.createElement("div");
    progressBar.classList.add("a-progress-bar");

    const progress = document.createElement("div");
    progress.classList.add("a-progress");
    progress.append(progressBar);

    const sound = document.createElement("div");
    sound.classList.add("a-sound");
    sound.append(soundBar);

    const range = document.createElement("input");
    range.classList.add("a-progress-range");
    range.type = "range";
    range.min = "0";
    range.max = "100";
    range.value = "0";

    const player = document.createElement("div");
    player.classList.add("player", "shadow-inset-25");
    player.addEventListener("mouseover", (e: Event) =>
      this.player.withAudio(e, true)
    );
    player.addEventListener("mouseout", (e: Event) =>
      this.player.withAudio(e, false)
    );

    player.append(
      audio,
      playButton,
      volumeButton,
      progress,
      range,
      sound,
      time
    );

    return player;
  }
}
