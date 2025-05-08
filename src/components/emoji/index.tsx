import { $, component$ } from "@builder.io/qwik";
import { showMonetagAd } from "~/libs/monetag";

export const EmojiCard = component$(() => {

     const handleClaimReward = $(() => {
        showMonetagAd().then(() => {
          console.log('Reward Claimed!');
    
        }).catch((err) => {
          console.error('Failed to show ad:', err);
        });
      });

    return (
        <>
            <div class="w-1/3 h-42 p-1 bg-white">
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
                        src="/images/gif/in-love.gif"
                        alt="Loading animation"
                        class=""
                    />
                    <div class="h-8 w-full inline-flex justify-center items-center ">
                        <button onClick$={handleClaimReward} class="size-full bg-amber-200 w-full rounded-b-xl border-b-5 active:border-b-0 border-amber-500 transition-all duration-100">
                            Farm Card
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
});