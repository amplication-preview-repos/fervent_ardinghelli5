import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ColoWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
};
