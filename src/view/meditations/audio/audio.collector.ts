import { Meditation } from "types/meditation.types";
import { Player } from "./player";

class AudioCollector {
  collection: Player[] = [];

  drop() {
    this.collection = [];
  }

  add(Audio: Player) {
    this.collection.push(Audio);
  }

  stop(dontTouchID: boolean | string = false) {
    this.collection.forEach((Audio) => {
      if (Audio.active) {
        if (dontTouchID && dontTouchID == Audio.id) return;
        Audio.togglePlay();
      }
    });
  }

  playNext(currentTrack: string, meditation: Meditation) {
    let nextIndex = meditation.tracks.indexOf(currentTrack) + 1;

    const currentAudio = this.collection.find(
      (player) => player.id === currentTrack
    );
    if (currentAudio) currentAudio.stop();

    if (nextIndex === 0) return;
    if (nextIndex >= meditation.tracks.length) nextIndex = 0;
    if (!meditation.tracks[nextIndex]) return;

    const nextTrack = meditation.tracks[nextIndex];

    const nextAudio = this.collection.find((player) => player.id === nextTrack);
    if (nextAudio) nextAudio.togglePlay();
  }
}

export const audioCollector = new AudioCollector();
