export {};

declare global {
  interface Window {
    show_9304204?: () => Promise<void>;
  }

  interface Window {
    Telegram?: {
      WebApp?: {
        initData: string;
        initDataUnsafe?: any;
        sendData?: (data: string) => void;
        close?: () => void;
        expand?: () => void;
        // Add other properties you need
      };
    };
  }
}
