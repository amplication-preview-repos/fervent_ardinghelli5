import { Module } from "@nestjs/common";
import { ColoModuleBase } from "./base/colo.module.base";
import { ColoService } from "./colo.service";
import { ColoController } from "./colo.controller";
import { ColoResolver } from "./colo.resolver";

@Module({
  imports: [ColoModuleBase],
  controllers: [ColoController],
  providers: [ColoService, ColoResolver],
  exports: [ColoService],
})
export class ColoModule {}
