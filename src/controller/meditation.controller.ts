import meditationModel from "model/meditation.model";
import meditationService from "service/meditation.service";
import { state } from "store/state";
import { HttpMeditationRequest } from "types/http.request.types";
import { Meditation } from "types/meditation.types";

class MeditationController {
  async create(meditation: Meditation) {
    const createdMeditation = await meditationService.create(
      this.createHttp(meditation)
    );

    if (createdMeditation) {
      meditationModel.create(createdMeditation);
      meditationModel.emit("meditation.update.list");
    }
  }

  async update(meditation: Meditation) {
    const updatedMeditation = await meditationService.update(
      this.createHttp(meditation)
    );

    if (updatedMeditation) {
      meditationModel.update(updatedMeditation);
      meditationModel.emit("meditation.update.list");
    }
  }

  async delete(meditation: Meditation) {
    await meditationService.delete(meditation.id);

    meditationModel.delete(meditation.id);
    meditationModel.emit("meditation.update.list");
  }

  private createHttp(meditation: Meditation): HttpMeditationRequest {
    const httpMeditation: HttpMeditationRequest = {
      ...meditation,
      _id: meditation.id
    };
    return httpMeditation;
  }

  getMeditation(currentMeditation: string) {
    return state.user.meditations.filter(
      (meditation) => meditation.id === currentMeditation
    )[0];
  }

  async getTracks() {
    const { status, ...tracks } = await meditationService.getTracks();
    meditationModel.updateTracks(Object.values(tracks));
  }

  getTrack(id: string) {
    return state.tracks.find((track) => track.id === id);
  }

  async updateMeditationTracks(
    meditation: Meditation,
    tracks: HTMLDivElement[]
  ) {
    const selectedTracks = [];
    for (const track of tracks) {
      const cb = track.querySelector(".track__checkbox");
      if (cb && cb instanceof HTMLInputElement && cb.checked) {
        selectedTracks.push(`${cb.dataset.id}`);
      }
    }

    meditation.tracks = [...selectedTracks];

    await this.update(meditation);
  }
}

export default new MeditationController();
