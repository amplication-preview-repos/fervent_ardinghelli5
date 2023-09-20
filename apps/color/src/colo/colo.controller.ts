import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ColoService } from "./colo.service";
import { ColoControllerBase } from "./base/colo.controller.base";

@swagger.ApiTags("colos")
@common.Controller("colos")
export class ColoController extends ColoControllerBase {
  constructor(protected readonly service: ColoService) {
    super(service);
  }
}
