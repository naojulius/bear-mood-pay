import { component$, useSignal} from "@builder.io/qwik";
import WalletImage from '~/assets/images/icons/wallet.png?jsx';
import PlusImage from '~/assets/images/icons/plus.png?jsx';
import CheckImage from '~/assets/images/icons/check.png?jsx';
import TransactionImage from '~/assets/images/icons/transaction.png?jsx';

export const Setting = component$(() => {
  const isAddWalletMode = useSignal(false);
  return (
    <>
      <div class="w-full inline-flex flex-col gap-4">
      <div class="bg-gray-200 h-16 rounded-lg inline-flex items-center gap-2 w-full">
        <WalletImage class="size-14" />
        
        {isAddWalletMode.value ? (
          <div class="h-full w-full inline-flex items-center">
            <input type="text" class="w-full h-10 bg-amber-300 rounded-lg" />
            <button class="size-14 p-1">
              <CheckImage />
            </button>
          </div>
        ) : (
          <div class="h-full w-full inline-flex items-center">
            <span class="w-full text-lg font-bold text-gray-600 bg-gray-300 px-2 inline-flex items-center rounded">
              Add your USDT Web 3 wallet
            </span>
            <button class="size-14 p-1">
              <PlusImage />
            </button>
          </div>
        )}
      </div>

        <div class="inline-flex flex-col w-full bg-gray-200 rounded-lg items-center">
          <div class="inline-flex w-full bg-gray-200 rounded-lg p-2 items-center">
            <TransactionImage class="size-14" />
            <div class="text-xl font-bold text-gray-600">Withraw to your wallet</div>
          </div>
          <div class="w-full p-2 inline-flex flex-wrap gap-2">
              <div class="size-15 bg-amber-500 rounded-lg border-b-4 border-amber-700 flex items-center justify-center text-xl font-extrabold text-white">
                  0.3$
              </div>
              <div class="size-15 bg-amber-500 rounded-lg border-b-4 border-amber-700 flex items-center justify-center text-xl font-extrabold text-white">
                  0.5$
              </div>
              <div class="size-15 bg-amber-500 rounded-lg border-b-4 border-amber-700 flex items-center justify-center text-xl font-extrabold text-white">
                  0.8$
              </div>
              <div class="size-15 bg-amber-500 rounded-lg border-b-4 border-amber-700 flex items-center justify-center text-xl font-extrabold text-white">
                  1$
              </div>
              <div class="size-15 bg-amber-500 rounded-lg border-b-4 border-amber-700 flex items-center justify-center text-xl font-extrabold text-white">
                  1.5$
              </div>
              <div class="size-15 bg-amber-500 rounded-lg border-b-4 border-amber-700 flex items-center justify-center text-xl font-extrabold text-white">
                  2$
              </div>
              <div class="size-15 bg-amber-500 rounded-lg border-b-4 border-amber-700 flex items-center justify-center text-xl font-extrabold text-white">
                  2.5$
              </div>
              <div class="size-15 bg-amber-500 rounded-lg border-b-4 border-amber-700 flex items-center justify-center text-xl font-extrabold text-white">
                  3$
              </div>
          </div>
        </div>
      </div>
    </>
  );
});