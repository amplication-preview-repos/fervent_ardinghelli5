import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ColoServiceBase } from "./base/colo.service.base";

@Injectable()
export class ColoService extends ColoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
