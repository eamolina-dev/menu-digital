// data/index.ts
import { laPalmera } from "./laPalmera";
import { ricardo } from "./ricardo";

export const menus = {
  laPalmera: laPalmera,
  ricardo: ricardo,
};

export type MenuKey = keyof typeof menus;
