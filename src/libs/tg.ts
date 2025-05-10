import type { User } from "./user/user";

// src/lib/getTelegramUser.ts
export const getTelegramUser = (): any | null => {
    if (typeof window !== 'undefined') {
      const telegram = (window as any).Telegram;
      if (telegram && telegram.WebApp) {
        return telegram.WebApp.initDataUnsafe?.user ?? {
            first_name : "--",
            last_name : "---",
            id: 0,
            language_code: 'en',
            photo_url: '',
            username: "--x--"
        } as User;
      }
    }
    return null;
  };
  