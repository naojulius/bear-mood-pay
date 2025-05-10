import { component$ } from "@builder.io/qwik";
import { EmojiCard } from "../emoji";


export const CardList = component$(() => {
    return (
        <>
            <div class="h-[calc(100vh-6rem)] w-full overflow-y-scroll">
                <div class="grid grid-cols-3 gap-2">
                    <EmojiCard />
                </div>
            </div>
        </>
    );
});