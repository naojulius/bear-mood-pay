import { $, component$, useSignal, useTask$} from "@builder.io/qwik";
import BearNeutralEmoji from '~/assets/images/emojis/neutral.png?jsx';
import BearCryEmoji from '~/assets/images/emojis/cry.png?jsx';
import BearMoneyEmoji from '~/assets/images/emojis/money.png?jsx';
import StopWatchImage from '~/assets/images/money/stopwatch.png?jsx';
import { getAdController } from "~/libs/adsgram";

export const BearCard = component$(() => {
  const timeLeft = useSignal(1 * 2);
  const disabled = useSignal(false);
  const cardScratches = useSignal(0);
  const cardScratchesLimit = useSignal(2);
  const cardScratchesStep = useSignal(1);
  const isCardDestroyed = useSignal(false);

  const buttonState = useSignal<'start' | 'claim' | 'timer' | 'destroy'>('start');

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
    if (isCardDestroyed.value) { return };
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
    if (isCardDestroyed.value) { return };
    cardScratches.value += cardScratchesStep.value;
    buttonState.value = "start";
    console.log('Reward Claimed!');
    // Add any reward logic here
  });

  const clickCard = $(() => {
    if (isCardDestroyed.value) { return };
    if (disabled.value) { return };
    const AdController = getAdController();
    if (!AdController) {
      console.warn('AdController not initialized');
      return;
    }

    AdController.show()
      .then((result) => {
        startTimer();
        console.log('✅ Ad watched or closed:', result);
        // Reward the user
      })
      .catch((result) => {
        startTimer();
        console.log('❌ Ad error or skipped:', result);
        // Handle error
      });
  });

  return (
    <>
      <div class="relative h-46 w-32 rounded-md shadow-sm border-2 border-amber-700 bg-amber-100">
        <div class="w-full inline-flex justify-between items-center">
          <div class="text-sm font-bold px-2 inline-flex items-center gap-1 w-full">
            {buttonState.value === 'destroy' ? (
              <div class="text-center w-full">
                limit reached
              </div>
            ) : (
              <>
                {cardScratches}/{cardScratchesLimit} <span class="text-xs">scratch</span>
              </>
            )}
          </div>
          {buttonState.value != 'destroy' ? (
            <div class="text-sm font-bold px-2">
              Lv.0
            </div>
          ) : (<></>)}

        </div>
        {buttonState.value === 'destroy' ? (
          <BearCryEmoji class="p-4 z-30 transition-all duratio-500" />
        ) : buttonState.value === 'claim' ? (
          <BearMoneyEmoji class="p-4 z-30 transition-all duratio-500" />
        ): (
          <BearNeutralEmoji class="p-4 z-30 transition-all duratio-500" />
        )}


        <div class="absolute bottom-0 left-0 h-8 bg-amber-300 w-full border-t-2 rounded-b-md border-amber-700 font-bold inline-flex justify-center items-center">
          <div class="text-sm inline-flex font-bold items-center gap-2">
            {buttonState.value === 'timer' ? (
              <>
                <StopWatchImage class="size-6" />
                <span>{formatTime(timeLeft.value)}</span>
              </>
            ) : buttonState.value === 'claim' ? (
              <button onClick$={handleClaimReward} class="size-full z-20">
                Claim Reward
              </button>
            ) : buttonState.value === 'destroy' ? (
              <button onClick$={handleClaimReward} class="size-full z-20">
                destroy card
              </button>
            ) : (
              <button onClick$={clickCard} disabled={disabled.value ? true : undefined} class="size-full">
                Farm Mood
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
});