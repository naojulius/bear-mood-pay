import {
  $,
  component$,
  useComputed$,
  useOnWindow,
  useSignal,
} from "@builder.io/qwik";
import { ThreeDViewer } from "../factory";
import type { EmojiProcessingQueue } from "~/libs/queue/emoji-processing.queue";
import { get, set } from 'idb-keyval';
import RocketImage from '~/assets/images/icons/fan.png?jsx';
import StarImage from '~/assets/images/icons/star.png?jsx';
import { showMonetagAd } from "~/libs/monetag";

// Qwik Component
export const Factory = component$(() => {
  const isProcessing = useSignal(false);

  const progress = useSignal(0);
  const currentEmoji = useSignal("");
  const remainProcessingEmoji = useSignal(0)
  const currentBoost = useSignal(1);
  const boostLimit = useSignal(5);

  const processEmoji = $((item: EmojiProcessingQueue) => {
    return new Promise<void>((resolve) => {
      currentEmoji.value = item.emoji.name;
      const total = item.emoji.processingTimeInSecond;
      item.remainingTime = total;

      const intervalMs = 100;
      const totalSteps = (total * 1000) / intervalMs;
      let currentStep = 0;

      progress.value = 0;

      const timer = setInterval(() => {
        currentStep++;
        progress.value = Math.min((currentStep / totalSteps) * 100, 100);

        if (currentStep % (1000 / intervalMs) === 0 && item.remainingTime! > 0) {
          item.remainingTime!--;
        }

        if (currentStep >= totalSteps) {
          clearInterval(timer);
          console.log(`✅ Finished processing ${item.emoji.name} with Id: ${item.emoji.id}`);

          // Remove from queue
          get('em').then((queue: EmojiProcessingQueue[] = []) => {
            const updated = queue.filter(q => q.emoji.id !== item.emoji.id);
            set('em', updated);
            remainProcessingEmoji.value = updated.length;

            // If no more items left, reset progress
            if (updated.length === 0) {
              progress.value = 0;
            }
          });

          resolve();
        }

      }, intervalMs);
    });
  });

  useOnWindow(
    'load',
    $(() => {
      const intervalId = setInterval(async () => {
        if (isProcessing.value) return;

        const val = await get('em');
        if (Array.isArray(val) && val.length > 0) {
          remainProcessingEmoji.value = val.length;
          isProcessing.value = true;

          const current = val[0];
          await processEmoji(current);

          isProcessing.value = false;
        } else {
          isProcessing.value = false;
        }
      }, 1000);

      return () => clearInterval(intervalId);
    })
  );

  const emojiName = useComputed$(() => {
    if (currentEmoji.value == "question") { return "OOOOOO" }
    return currentEmoji.value.replace(/-/g, " ").toUpperCase();
  })

  const emojiSource = useComputed$(() => {
    if (currentEmoji.value == "") { return "sleep" }
    return currentEmoji.value;
  })

  const handleBoost = $(async () => {
    if (currentBoost.value >= boostLimit.value){return}
    try {
      await showMonetagAd();
      currentBoost.value += 1;
    } catch (err) {
      //console.error('Failed to show ad:', err);
    }
    
  })

  const currentBoostVal =  useComputed$(() => {
   return currentBoost.value;
  })
  const disableBoostButton = useComputed$(() => {
    if (currentBoost.value >= boostLimit.value){return true}
    else{return false}
  })

  return (
    <>
      <div class="h-[calc(100vh-10rem)] w-full overflow-hidden relative">
        <ThreeDViewer />
        <div class="absolute  w-full top-0 left-0">
          <div class="w-fill bg-gray-50 p-2 rounded-lg">
            <div class=" w-[100%] bg-gray-300 h-4 rounded overflow-hidden">
              <div
                class="bg-green-500 h-full transition-all duration-100"
                style={{ width: `${progress.value}%` }}
              ></div>
            </div>
            <div class="w-full pt-2 inline-flex gap-2 items-center">
              <div class="h-[100px] w-[100px] min-w-[100px] bg-gray-200 rounded-lg inline-flex items-center justify-center">
                <img 
                  width="100"
                  height="100"
                  src={`/images/emojis/${emojiSource.value}.png`}
                  alt="Emoji"
                  class="h-full w-full" />
              </div>
              <div class="w-full inline-flex flex-col">
                <div class="text-md font-bold">Processing {emojiName.value} + {remainProcessingEmoji.value}</div>
                <div class="text-sm text-gray-400">
                  Embrace every shade of your mood, for within each feeling lies a hidden trove of gems.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-10 left-0 w-full">
          <div class="w-full buttons text-lg  p-2 inline-flex items-center justify-center gap-2">
            <button 
              disabled={disableBoostButton.value}
              onClick$={handleBoost}
              class="
              disabled:bg-gray-200
              w-auto items-center justify-between inline-flex flex-row gap-2 fredoka-condensed-bold transition-all duration-50 px-2 font-bold text-lg bg-amber-100 text-amber-900 rounded-xl border-t-amber-900  border-1 active:bg-amber-400">
              <RocketImage class="size-12 animate animate-spin" />
              <div>Boost x{currentBoostVal.value}</div>
            </button>
            <button class="w-36 items-center inline-flex flex-row gap-2 fredoka-condensed-bold transition-all duration-50 px-2 font-bold text-lg bg-amber-100 text-amber-900 rounded-xl border-t-amber-900 border-1 active:bg-amber-400">
            <div>Upgrade</div>
            <StarImage class="size-12 animate animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
});
