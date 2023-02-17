import meditationController from "controller/meditation.controller";
import { getMeditationsLang } from "lang/meditation/meditations.lang";
import { Audio } from "../audio/audio";

class TrackListView {
  async init(root: HTMLElement, meditationId: string) {
    this.render(root, meditationId);
  }

  render(root: HTMLElement, meditationId: string) {
    const tracks = [];
    const meditation = meditationController.getMeditation(meditationId);
    const { noTracks } = getMeditationsLang();

    const container = document.createElement("div");

    for (const track of meditation.tracks) {
      const trackItem = document.createElement("div");
      const trackData = meditationController.getTrack(track);
      const trackInfo = document.createElement("div");

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
      trackItem.textContent = `${noTracks}`;

      tracks.push(trackItem);
    }

    container.append(...tracks);

    root.replaceChildren(container);
  }
}

export default new TrackListView();
