import { component$ } from "@builder.io/qwik";
import { BearCard } from "../cards";

export const CardList = component$(() => {
    return (
        <>
        
            <div class="h-[calc(100vh-6rem)] w-full overflow-y-scroll">
                <div class="flex flex-wrap items-start gap-0">
                    <BearCard />
                    <BearCard />
                    <BearCard />
                    <BearCard />
                    <BearCard />
                    <BearCard />
                    <BearCard />
                    <BearCard />
                    <div class="h-[20rem]"></div>
                </div>
            </div>
        </>
    );
});