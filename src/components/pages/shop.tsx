import { $, component$, useComputed$, useSignal } from "@builder.io/qwik";
import { EMOJIS } from "~/libs/emoji";

export const Shop = component$(() => {
  const currentEmoji = useSignal("question");
  const isRolling = useSignal(false);

  const emojiSource = useComputed$(() => {
    return currentEmoji.value;
  })

  const emojiName = useComputed$(()=>{
    if(currentEmoji.value == "question"){return "OOOOOO"}
    return currentEmoji.value.replace(/-/g, " ").toUpperCase();
  })

  const shopEmoji = $(() => {
    if (isRolling.value) return; // prevent double-trigger

    isRolling.value = true;

    let intervalId: ReturnType<typeof setInterval>;;
    let rollCount = 0;
    const maxRolls = 20; // how many times to switch before stopping

    intervalId = setInterval(() => {
      const random = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      currentEmoji.value = random;
      rollCount++;
      if (rollCount >= maxRolls) {
        clearInterval(intervalId);
        isRolling.value = false;
      }
    }, 80); // how fast the emoji changes (ms)
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
          src={`/images/emojis/${emojiSource.value}.png`}
          alt="Emoji"
          class=""
        />
        <div class="h-8 w-full inline-flex justify-center items-center">
            <div
              class="text-center size-full bg-amber-200 w-full rounded-b-xl border-b-5 active:border-b-0 border-amber-500 transition-all duration-100"
            >
              {emojiName.value}
            </div>
          </div>
      </div>
    </div>
    <div class="p-4">
      <button  onClick$={shopEmoji}>
        Shop a card
      </button>
    </div>
    </>
  );
});