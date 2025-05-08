// src/lib/getTelegramUser.ts
export const getTelegramUser = (): any | null => {
    if (typeof window !== 'undefined') {
      const telegram = (window as any).Telegram;
      if (telegram && telegram.WebApp) {
        return telegram.WebApp.initDataUnsafe?.user ?? null;
      }
    }
    return null;
  };
  