import type { AdsgramController } from "~/types/global";

let AdController: AdsgramController | null = null;

export function initAdController() {
  if (typeof window !== 'undefined' && window.Adsgram && !AdController) {
    AdController = window.Adsgram.init({ blockId: 'int-10522' });
  }
}

export function getAdController() {
  console.log(AdController);
  return AdController;
}
