import { component$ } from "@builder.io/qwik";
import { Diamond } from "./diamond";
import { Profile } from "./profile";
import { Coin } from "./coin";

export const NavigationTop = component$(() => {
    return (
        <>
            <div class="h-16 w-full inline-flex gap-2 items-center justify-center p-2 bg-orange-900 shadow-xs">
                <Profile />
                <div class="w-full p-2">
                    <div class="w-full flex  flex-row gap-2">
                        <Diamond />
                        <Coin />
                    </div>
                </div>
            </div>
        </>
    );
});