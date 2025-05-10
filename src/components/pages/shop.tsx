import { $, component$, useComputed$, useSignal } from "@builder.io/qwik";
import { EMOJIS } from "~/libs/emoji";
import { showMonetagAd } from "~/libs/monetag";

export const Shop = component$(() => {
  const currentEmoji = useSignal("question");
  const isRolling = useSignal(false);

  const emojiSource = useComputed$(() => {
    return currentEmoji.value;
  })

  const emojiName = useComputed$(() => {
    if (currentEmoji.value == "question") { return "OOOOOO" }
    return currentEmoji.value.replace(/-/g, " ").toUpperCase();
  })


  const shopEmoji = $(async () => {
    if (isRolling.value) return; // prevent double-trigger

    try {
      await showMonetagAd();
      isRolling.value = true;
      
      let rollCount = 0;
      const maxRolls = 20; // how many times to switch before stopping

      const intervalId = setInterval(() => {
        const random = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
        currentEmoji.value = random;
        rollCount++;
        if (rollCount >= maxRolls) {
          clearInterval(intervalId);
          isRolling.value = false;
        }
      }, 100);
    } catch (err) {
      //console.error('Failed to show ad:', err);
    }
 });

  return (
    <>
      <div class="p-1 bg-white w-1/2">
        <div class="border-1 size-full border-amber-500 rounded-xl shadow-sm inline-flex flex-col">
          <div class="p-1 w-full text-sm inline-flex justify-between items-center">
            <span class="text-transparent font-bold hidde">Lv.0</span>
            <span class="text-transparent text-green-500 font-bold">0/50</span>
          </div>
          <img
            width="100"
            height="100"
            src={`/images/emojis/${emojiSource.value}.png`}
            alt="Emoji"
            class=""
          />
          <div class="h-8 w-full inline-flex justify-center items-center">
            <div
              class="text-center size-full bg-amber-200 w-full rounded-b-xl  border-amber-500 transition-all duration-100"
            >
              {emojiName.value}
            </div>
          </div>
        </div>
      </div>
      <div class="p-4">
        <button
          disabled={isRolling.value}
          class="p-2 fredoka-condensed-bold transition-all duration-50 px-2 font-bold text-lg bg-amber-100 text-amber-900 rounded-xl border-t-amber-900 border-1 active:bg-amber-400 disabled:bg-gray-300" onClick$={shopEmoji} >
          Shop a card
        </button>
      </div>
    </>
  );
});