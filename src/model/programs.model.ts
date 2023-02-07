import { state } from "store/state";
import EventEmitter from "utils/observer.utils";
import { Program } from "types/program.types";

const MEDIA_ENDPOINT =
  "https://raw.githubusercontent.com/fogarea/assets/fitness/";

class ProgramsModel extends EventEmitter {
  update(programs: Program[]) {
    const programsArr: Program[] = Object.values(programs).map((program) => {
      program.media = [MEDIA_ENDPOINT + program.media];
      return program;
    });

    state.programs = [...programsArr];
  }
}

export default new ProgramsModel();
