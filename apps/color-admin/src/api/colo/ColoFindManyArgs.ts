import { ColoWhereInput } from "./ColoWhereInput";
import { ColoOrderByInput } from "./ColoOrderByInput";

export type ColoFindManyArgs = {
  where?: ColoWhereInput;
  orderBy?: Array<ColoOrderByInput>;
  skip?: number;
  take?: number;
};
