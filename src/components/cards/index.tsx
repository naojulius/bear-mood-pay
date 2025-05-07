import { $, component$, useSignal, useTask$ } from "@builder.io/qwik";
import BearNeutralEmoji from '~/assets/images/emojis/neutral.png?jsx';
import BearCryEmoji from '~/assets/images/emojis/cry.png?jsx';
import BearMoneyEmoji from '~/assets/images/emojis/money.png?jsx';
import { IoSyncSolid } from "@qwikest/icons/ionicons";
import { showMonetagAd } from "~/libs/monetag";
import { addCoins, useCoinStore } from "~/stores/coin.store";


export const BearCard = component$(() => {
  const coinStore = useCoinStore();
  
  const timeLeft = useSignal(1 * 3);
  const disabled = useSignal(false);
  const cardScratches = useSignal(0);
  const cardScratchesLimit = useSignal(2);
  const cardScratchesStep = useSignal(1);
  const isCardDestroyed = useSignal(false);

  const buttonState = useSignal<'start' | 'claim' | 'timer' | 'destroy' | 'loading'>('start');

  useTask$(({ track }) => {
    const scratches = track(() => cardScratches.value); // React to changes
    const limit = cardScratchesLimit.value;

    if (scratches === limit) {
      isCardDestroyed.value = true;
      buttonState.value = "destroy";
      console.log('🎉 Max scratches reached!');
      // Perform any logic here (disable button, trigger modal, etc.)
    }
  });
  
  const startTimer = $(() => {
    if (isCardDestroyed.value) { return }
    buttonState.value = "timer";
    const interval = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--;
      } else {
        clearInterval(interval);
        buttonState.value = "claim";
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0'); // Add seconds here
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleClaimReward = $(() => {
    if (isCardDestroyed.value) { return }
    if (disabled.value) { return }
    showMonetagAd().then(() => {
      cardScratches.value += cardScratchesStep.value;
      buttonState.value = "start";
      addCoins(coinStore, 50);
      console.log('Reward Claimed!');

    }).catch((err) => {
      buttonState.value = "start";
      console.error('Failed to show ad:', err);
    });
    // Add any reward logic here
  });

  const clickCard = $(() => {
    if (isCardDestroyed.value) { return }
    if (disabled.value) { return }
    buttonState.value = "loading";  
    startTimer();
  });

  return (
    <>
      <div class="relative  w-1/3 h-42 p-1">
      <div class="size-full rounded-md shadow border-2 border-amber-700 border-b-5 bg-amber-100 inline-flex flex-col gap-2">
        <div class="w-full inline-flex justify-between items-center">
          <div class="text-xs font-bold px-2 inline-flex items-center gap-1 w-full">
            {buttonState.value === 'destroy' ? (
              <div class="text-center w-full textè-sm fredoka-condensed-bold">
                limit reached
              </div>
            ) : (
              <>
                {cardScratches}/{cardScratchesLimit}
              </>
            )}
          </div>
          {buttonState.value != 'destroy' ? (
            <div class="text-sm font-bold px-2 fredoka-condensed-bold">
              Lv.0
            </div>
          ) : (<></>)}
        </div>
        
        <div class="inline-flex items-center justify-center pt-4">
        {buttonState.value === 'destroy' ? (
          <BearCryEmoji class="h-20 w-20  transition-all duratio-500" />
          ) : buttonState.value === 'claim' ? (
          <BearMoneyEmoji class="h-20 w-20  transition-all duratio-500" />
          ) : (
          <BearNeutralEmoji class="h-20 w-20 transition-all duratio-500" />
          )}
        </div>


        <div class="bg-amber-300 w-full h-full  rounded-b-md font-bold inline-flex justify-center items-center shadow-md">
          <div class="size-full">
            {buttonState.value === 'timer' ? (
              <div class="text-sm size-full inline-flex items-center justify-center gap-2 fredoka-condensed-bold">
                {/* <StopWatchImage class="size-6" /> */}
                <span>{formatTime(timeLeft.value)}</span>
              </div>
            ) : buttonState.value === 'claim' ? (
              <button onClick$={handleClaimReward} class="text-sm w-full h-full z-20 bg-green-500 text-white">
                Claim Reward
              </button>
            ) : buttonState.value === 'destroy' ? (
              <button  class="size-full z-20 text-white bg-red-500">
                Destroy Card
              </button>
            ) : buttonState.value === 'loading' ? (
              <div class="size-full inline-flex flex-row gap-1 items-center justify-center text-gray-800">
                <div class="text-2xl animate animate-spin">
                  <IoSyncSolid />
                </div>
                <div class="size-full">
                  Loading
                </div>
              </div>) : (
              <button onClick$={clickCard} disabled={disabled.value ? true : undefined} class="text-sm w-full h-full bg-amber-400 text-gray-800 fredoka-condensed-bold">
                Farm Mood
              </button>
            )}
          </div>
        </div>
      </div>
      </div>
    </>
  );
});