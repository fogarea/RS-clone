import { state } from "store/state";
import EventEmitter from "utils/observer.utils";
import { Program } from "types/program.types";
import { MediaEndpoint } from "types/media.endpoint.types";

class ProgramsModel extends EventEmitter {
  update(programs: Program[]) {
    const programsArr: Program[] = Object.values(programs).map((program) => {
      program.media = [MediaEndpoint.PROGRAM + program.media];
      return program;
    });

    state.programs = [...programsArr];
  }
}

export default new ProgramsModel();
