import { AdsgramController } from "~/types/global";

let AdController: AdsgramController | null = null;

export function initAdController() {
  if (typeof window !== 'undefined' && window.Adsgram && !AdController) {
    AdController = window.Adsgram.init({ blockId: 'int-6488' });
  }
}

export function getAdController() {
  return AdController;
}
