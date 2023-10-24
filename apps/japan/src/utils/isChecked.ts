import { checkType } from "./checkType";

export const isChecked = (list: checkType[], id: string): boolean => {
  const exist = list.find((item) => item.checkId === id);
  return exist !== undefined;
};
