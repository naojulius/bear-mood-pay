import {
    $,
    component$,
    useComputed$,
    useSignal,
} from "@builder.io/qwik";
import type  { EmojiProcessingQueue } from "~/libs/queue/emoji-processing.queue";
import  { get, set } from 'idb-keyval';
import  { EMOJIS } from "~/libs/emoji";
import ImgYawn from '~/assets/images/icons/yawn.png?jsx';

export const EmojiCard = component$(() => {
    const tempQueue = useSignal<EmojiProcessingQueue[]>([]);

    const handleQueue = $(() => {
        const id = Math.floor(Math.random() * 10000) + 1;

        const card: EmojiProcessingQueue = {
            id,
            remainingTime: id,
            isDone: false,
            emoji: {
                id,
                name: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
                level: 0,
                scratch: 0,
                processingTimeInSecond: 3,
            },
        };

        get('em').then((val: EmojiProcessingQueue[] = []) => {
            const updatedQueue = [...val, card];
            set('em', updatedQueue).then(() => {
                tempQueue.value = updatedQueue;
                console.log('Emoji added to queue');
            }).catch((err) => console.error('Failed to queue emoji', err));
        });

    });

    const queued = useComputed$(() => {
        return tempQueue.value.length;
    });

    return (
        <div class="p-1 bg-white">
            <div class="border-1 size-full border-amber-500 rounded-xl shadow-sm inline-flex flex-col">
                <div class="p-1 w-full text-sm inline-flex justify-between items-center">
                    <span class="text-gray-800 font-bold">Lv.0</span>
                    <span class="text-xs text-green-500 font-bold">0/50</span>
                </div>
                {/* <img
                    src="/images/emojis/yawn.png"
                    alt="Emoji"
                    class=""
                /> */}
                <ImgYawn />
                <div class="h-8 w-full inline-flex justify-center items-center">
                    <button
                        onClick$={handleQueue}
                        class="size-full bg-amber-200 w-full rounded-b-xl border-b-5 active:border-b-0 border-amber-500 transition-all duration-100"
                    >
                        {queued}
                    </button>
                </div>
            </div>
        </div>
    );
});
