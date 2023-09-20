import { Colo as TColo } from "../api/colo/Colo";

export const COLO_TITLE_FIELD = "title";

export const ColoTitle = (record: TColo): string => {
  return record.title?.toString() || String(record.id);
};
