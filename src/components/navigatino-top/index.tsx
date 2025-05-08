import { component$ } from "@builder.io/qwik";
import { Profile } from "./profile";
import { Diamond } from "./diamond";

export const NavigationTop = component$(() => {
    return (
        <>
            <div class="h-16 w-full inline-flex gap-2 items-center justify-between p-2">
                <Profile />
                <Diamond />
            </div>
        </>
    );
});