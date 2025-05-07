import { component$ } from "@builder.io/qwik";
import DiamondImage from '~/assets/images/money/diamond.png?jsx';
import { useDiamondStore } from "~/stores/diamond.store";

export const Diamond = component$(() => {
    const diamonStore = useDiamondStore();

    return (
        <>
            <div class="size-8 inline-flex no-wrap items-center w-full">
                <DiamondImage class="z-10 size-12" />
                <div class="fredoka-condensed-bold bg-amber-100 text-left -ml-5 px-4 w-full rounded-r-full border-2 border-amber-500">
                    {diamonStore.balance}
                </div>
            </div>
        </>
    );
});