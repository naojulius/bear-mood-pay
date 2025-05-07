// src/libs/monetag.ts

let hasInitialized = false;

/**
 * Injects the Monetag SDK script into the page if it hasn't already been injected.
 */
export function initMonetagScript(): void {
  if (typeof window === 'undefined' || hasInitialized) return;

  const scriptId = 'monetag-sdk-script';

  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = '//whephiwums.com/sdk.js';
    script.dataset.zone = '9304204';
    script.dataset.sdk = 'show_9304204';
    document.body.appendChild(script);

    hasInitialized = true;
  }
}

/**
 * Waits until the Monetag ad function is ready and then calls it.
 */
export async function showMonetagAd(): Promise<void> {
  return new Promise((resolve, reject) => {
    const tryShowAd = () => {
      if (typeof window.show_9304204 === 'function') {
        window
          .show_9304204()
          .then(() => {
            console.log('Ad watched successfully');
            resolve();
          })
          .catch(reject);
      } else {
        console.warn('Monetag ad function not ready yet. Retrying...');
        setTimeout(tryShowAd, 500);
      }
    };

    tryShowAd();
  });
}
