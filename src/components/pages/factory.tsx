import {
  $,
  component$,
  useOnWindow,
  useSignal,
} from "@builder.io/qwik";
import { ThreeDViewer } from "../factory";
import { EmojiProcessingQueue } from "~/libs/queue/emoji-processing.queue";
import { get, set, update } from 'idb-keyval';

// Qwik Component
export const Factory = component$(() => {
  const isProcessing = useSignal(false);

  const processEmoji = $((item: EmojiProcessingQueue) => {
    return new Promise<void>((resolve) => {
      const total = item.emoji.processingTimeInSecond;
      item.remainingTime = total;

      const interval = setInterval(() => {
        if (item.remainingTime! > 0) {
          item.remainingTime!--;
        }
      }, 1000);

      setTimeout(() => {
        clearInterval(interval);
        console.log(`✅ Finished processing ${item.emoji.name} with Id: ${item.emoji.id}`);

        // Optionally remove it from the queue in storage
        get('em').then((queue: EmojiProcessingQueue[] = []) => {
          const updated = queue.filter(q => q.emoji.id !== item.emoji.id);
          console.log(updated.length)
          set('em', updated);
        });

        resolve();
      }, total * 1000);
    });
  });

  useOnWindow(
    'load',
    $(() => {
      const intervalId = setInterval(async () => {
        if (isProcessing.value) return;

        const val = await get('em');
        if (Array.isArray(val) && val.length > 0) {
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

  return (
    <>
      <div class="h-[calc(100vh-10rem)] w-full overflow-hidden relative">
        <ThreeDViewer />
        <div class="absolute bg-gray-200 w-full top-0 left-0">
          {/* Info bar or status could go here */}
        </div>
      </div>
    </>
  );
});
