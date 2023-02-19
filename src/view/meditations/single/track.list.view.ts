import meditationController from "controller/meditation.controller";
import { getMeditationsLang } from "lang/meditation/meditations.lang";
import { Audio } from "../audio/audio";

class TrackListView {
  init(root: HTMLElement, meditationId: string) {
    this.render(root, meditationId);
  }

  render(root: HTMLElement, meditationId: string) {
    const tracks = [];
    const meditation = meditationController.getMeditation(meditationId);
    const { noTracks } = getMeditationsLang();

    const container = document.createElement("div");
    container.className = "meditation__playlist playlist";

    for (const track of meditation.tracks) {
      const trackItem = document.createElement("div");
      trackItem.className = "playlist__track";

      const trackData = meditationController.getTrack(track);

      const trackInfo = document.createElement("span");
      trackInfo.className = "playlist__title";

      if (trackData) {
        trackInfo.textContent = trackData.title;

        const trackPlayer = new Audio(trackData.media, trackData.id, meditation)
          .self;
        trackItem.append(trackInfo, trackPlayer);
      }

      tracks.push(trackItem);
    }

    if (!tracks.length) {
      const trackItem = document.createElement("div");
      trackItem.className = "playlist__empty";
      trackItem.textContent = `${noTracks}`;

      tracks.push(trackItem);
    }

    container.append(...tracks);

    root.replaceChildren(container);
  }
}

export default new TrackListView();
