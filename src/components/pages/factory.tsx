import { $, component$, createContextId, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { ThreeDViewer } from "../factory";
import { removeEmojiById, useLabsStore } from "~/stores/labs.store";
import { EmojiProcessingQueue } from "~/libs/queue/emoji-processing.queue";
import { Emoji } from "~/libs/emoji/emoji";

export const FACTORY_CTX = createContextId<EmojiProcessingQueue>('stuff');

export const Factory = component$(() => {
    // const cards = useSignal([]); //useGetCards();
    const labStore = useLabsStore();

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
            console.log(`✅ Finished processing ${item.emoji.name}`);
            resolve();
          }, total * 1000);
          
        //   const time = item.emoji.processingTimeInSecond * 1000;
        //   console.log(`⏳ Processing ${item.emoji.name} for ${item.emoji.processingTimeInSecond}s`);
        //   setTimeout(() => {
        //     console.log(`✅ Finished processing ${item.emoji.name}`);
        //     resolve();
        //   }, time);
        });
      });
    
      useTask$(({ track }) => {
        track(() => labStore.queue.length);
        track(() => labStore.isProcessing);
    
        if (labStore.queue.length > 0 && !labStore.isProcessing) {
          labStore.isProcessing = true;
    
          const current = labStore.queue[0];
          processEmoji(current);
    
        //   labStore.queue.splice(0, 1); // Remove processed emoji
          removeEmojiById(labStore, current.id);
          labStore.isProcessing = false;
        }
      });

    return (
        <>
            <div class="h-[calc(100vh-10rem)] w-full overflow-hidden">
                <ThreeDViewer />
            </div>
        </>
    );
});

