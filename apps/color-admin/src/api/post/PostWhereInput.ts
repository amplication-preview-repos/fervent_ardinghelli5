import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PostWhereInput = {
  descritpin?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
