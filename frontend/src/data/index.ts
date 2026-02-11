// data/index.ts
import { laPalmera } from "./laPalmera";
import { ricardo } from "./ricardo";
import { demoBistroMenu } from "./bitroMenu";

export const menus = {
  laPalmera: laPalmera,
  ricardo: ricardo,
  bistro: demoBistroMenu
};

export type MenuKey = keyof typeof menus;
