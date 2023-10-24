import { checkType } from "./checkType";

export const getCheckId = (list: checkType[], id: string): string => {
  const exist = list.find((item) => item.checkId === id);
  return `${exist?._id}`;
};
