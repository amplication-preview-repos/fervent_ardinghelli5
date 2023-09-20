import * as graphql from "@nestjs/graphql";
import { ColoResolverBase } from "./base/colo.resolver.base";
import { Colo } from "./base/Colo";
import { ColoService } from "./colo.service";

@graphql.Resolver(() => Colo)
export class ColoResolver extends ColoResolverBase {
  constructor(protected readonly service: ColoService) {
    super(service);
  }
}
