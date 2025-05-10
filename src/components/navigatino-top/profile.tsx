import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";
import { getTelegramUser } from "~/libs/tg";
import ProfileImage from '~/assets/images/avatars/crab.png?jsx';
import type { User } from "~/libs/user/user";

export const Profile = component$(() => {
    const user = useSignal({} as User);
    useOnWindow(
        'load', $(() => {
            user.value = getTelegramUser();
        })
    );
    return (
        <>
            <div class="inline-flex items-center gap-2 user-selection-none">
                <div class="size-12 rounded-md bg-amber-200">
                    <ProfileImage />
                </div>
                <div class="inline-flex flex-col gap-0">
                    <span class="text-xl font-bold fredoka-condensed-bold">
                        {user.value.username}
                    </span>
                    <span class="text-sm font-bold text-gray-500">
                        Lv.0
                    </span>
                </div>
            </div>
        </>
    );
});