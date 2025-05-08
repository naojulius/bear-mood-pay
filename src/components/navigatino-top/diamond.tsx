import { component$ } from "@builder.io/qwik";
import DiamondImage from '~/assets/images/coins/diamond.png?jsx';
import { useDiamondStore } from "~/stores/diamond.store";

export const Diamond = component$(() => {
    const diamonStore = useDiamondStore();

    return (
        <>
            <div class="inline-flex no-wrap items-center gap-2">
                <div class="fredoka-condensed-bold text-lg font-bold">
                    {diamonStore.balance}
                </div>
                <DiamondImage class="size-8" />
            </div>
        </>
    );
});