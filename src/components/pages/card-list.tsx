import { component$ } from "@builder.io/qwik";
import { BearCard } from "../cards";

export const CardList = component$(() => {
    return (
        <>
            <div  class="h-[calc(100vh-6rem)] w-full overflow-y-scroll">
                <div class="size-full">
                    <div class="w-full flex flex-wrap items-start gap-4">
                        <BearCard />
                        <BearCard />
                        <BearCard />
                        <BearCard />
                        <BearCard />
                        <BearCard />
                        <BearCard />
                        <BearCard />
                        <div class="h-46"></div>
                    </div>
                </div>
            </div>
        </>
    );
});