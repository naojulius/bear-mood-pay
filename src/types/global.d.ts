// src/types/global.d.ts
export interface ShowPromiseResult {
    reason?: string;
  }
  
  interface AdsgramController {
    show: () => Promise<ShowPromiseResult>;
  }
  
  interface AdsgramAPI {
    init: (options: { blockId: string }) => AdsgramController;
  }
  
  declare global {
    interface Window {
      Adsgram?: AdsgramAPI;
    }
  }
  