import { state } from "store/state";
import EventEmitter from "utils/observer.utils";
import { Meditation } from "types/meditation.types";
import { Track } from "types/track.types";

class MeditationModel extends EventEmitter {
  create(meditation: Meditation) {
    state.user.meditations.push(meditation);
  }

  update(meditation: Meditation) {
    state.user.meditations = state.user.meditations.map((med) => {
      if (med.id === meditation.id) return meditation;
      return med;
    });
  }

  delete(id: string) {
    state.user.meditations = state.user.meditations.filter(
      (med) => med.id !== id
    );
  }

  updateTracks(tracks: Track[]) {
    state.tracks = [...tracks];
  }
}

export default new MeditationModel();
