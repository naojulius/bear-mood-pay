import { component$ } from '@builder.io/qwik';
import CoinImage from '~/assets/images/money/coin.png?jsx';
import { useCoinStore } from '~/stores/coin.store';

export const Coin = component$(() => {
    const coinStore = useCoinStore();

    return (
        <>
            <div class="size-8 inline-flex no-wrap items-center w-full">
                <CoinImage class="z-10 size-12" />
                <div class="fredoka-condensed-bold bg-amber-100 text-left -ml-5 px-4 w-full rounded-r-full border-2 border-amber-500">
                    {coinStore.balance}
                </div>
            </div>
        </>
    );
});