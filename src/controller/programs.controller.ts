import programsService from "../service/programs.service";
import programsModel from "../model/programs.model";

class ProgramsController {
  async getAll() {
    const { status, ...programs } = await programsService.getAll();

    if (status === 404) return;

    programsModel.update(programs);
  }
}

export default new ProgramsController();
