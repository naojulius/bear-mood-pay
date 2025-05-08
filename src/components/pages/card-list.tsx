import { component$ } from "@builder.io/qwik";
import { EmojiCard } from "../emoji";


export const CardList = component$(() => {
    // const cards = useSignal([]); //useGetCards();
    return (
        <>
            <div class="h-[calc(100vh-6rem)] w-full overflow-y-scroll">
                <div class="inline-flex flex-wrap w-ffull">
                <EmojiCard />
                <EmojiCard />
                <EmojiCard />
                <EmojiCard />
                </div>
            </div>
        </>
    );
});