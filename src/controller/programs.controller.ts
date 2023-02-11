import programsService from "../service/programs.service";
import programsModel from "../model/programs.model";
import { Routing } from "types/route.types";
import navigationController from "./navigation.controller";

class ProgramsController {
  async getAll() {
    const { status, ...programs } = await programsService.getAll();

    if (status === 404) return;

    programsModel.update(programs);
  }

  redirectToPrograms() {
    navigationController.createRoute(Routing.PROGRAMS);
  }
}

export default new ProgramsController();
