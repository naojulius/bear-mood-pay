import { $, component$, useSignal, useStore, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { showMonetagAd } from "~/libs/monetag";
import { EmojiProcessingQueue } from "~/libs/queue/emoji-processing.queue";
import { getCardById, getQueuedSize, queueEmoji, useLabsStore } from "~/stores/labs.store";

export const EmojiCard = component$(() => {
    const labStore = useLabsStore();
    const remaining = useSignal<number | undefined>(undefined);
    const emojiId = useSignal<number>(0);

    const id = Math.floor(Math.random() * 10000) + 1;

    


    const handleQueue = $(() => {
        const card: EmojiProcessingQueue = {
            id: id,
            remainingTime: id,
            isDone: false,
            emoji: {
                id: id,
                name: 'hunger',
                level: 0,
                scratch: 0,
                processingTimeInSecond: 3,
            },
        }
    
        emojiId.value = card.id;
        queueEmoji(labStore, card)
        console.log('Added:', card);
      });

      useTask$(({ cleanup, track }) => {
        track(() => getQueuedSize(labStore));
        getCardById(labStore, emojiId.value)
        // const interval = setInterval(() => {
        //   if (!emojiId.value) return;
        //   const found = getCardById(labStore, emojiId.value);
        //   if (found) {
        //     remaining.value = found.remainingTime;
        //   }
        // }, 500);
    
        // cleanup(() => clearInterval(interval));
      });

    // const handleClaimReward = $(() => {
    //     queueEmoji(labStore, card);
    //     // showMonetagAd().then(() => {
    //     //     console.log('Reward Claimed!');

    //     // }).catch((err) => {
    //     //     console.error('Failed to show ad:', err);
    //     // });
    // });

    // useTask$(({ cleanup, track }) => {
    //     track(() => getQueuedSize(labStore));
    //     console.log("Tracked length:", getQueuedSize(labStore)); 
        
        
    //     // track(() => labStore.queue.length); // Rerun if queue changes
    //     // if (labStore.queue.length > 0)
    //     // {
    //     //     console.log("=====================>")
    //     // }

    //     // const interval = setInterval(() => {
    //     //   if (labStore.queue.length === 0) {
    //     //     remaining.value = undefined;
    //     //     return;
    //     //   }
      
    //     //   const emoji = labStore.queue[0];
      
    //     //   if (typeof emoji.remainingTime === 'number') {
    //     //     remaining.value = emoji.remainingTime;
    //     //     console.log(`⏳ Remaining time: ${emoji.remainingTime}s`);
    //     //   } else {
    //     //     remaining.value = undefined;
    //     //   }
    //     // }, 500);
      
    //     // cleanup(() => clearInterval(interval));
    //   });
      
      
    return (
        <>
            <div class="p-1 bg-white">
                <div class=" border-1 size-full border-amber-500 rounded-xl shadow-sm inline-flex flex-col">
                    <div class="p-1 w-full text-sm inline-flex justify-between items-center">
                        <span class="text-gray-800 font-bold">
                            Lv.0
                        </span>
                        <span class="text-xs text-green-500 font-bold">
                            0/50
                        </span>
                    </div>
                    <img
                        src="/images/emojis/yawn.png"
                        alt="Loading animation"
                        class=""
                    />
                    <div class="h-8 w-full inline-flex justify-center items-center ">
                        {/* <button onClick$={handleClaimReward} class="size-full bg-amber-200 w-full rounded-b-xl border-b-5 active:border-b-0 border-amber-500 transition-all duration-100">
                            Farm Card
                        </button> */}
                        <button onClick$={handleQueue} class="size-full bg-amber-200 w-full rounded-b-xl border-b-5 active:border-b-0 border-amber-500 transition-all duration-100">
                           {remaining.value ?? 'N/A'}s
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
});