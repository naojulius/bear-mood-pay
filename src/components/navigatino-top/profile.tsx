import { component$ } from "@builder.io/qwik";
import ProfileImage from '~/assets/images/bear/000.png?jsx';


export const Profile = component$(() => {
    return (
        <>
            <div class="size-14 min-w-14 min-h-14 bg-amber-100 rounded-md border-2 border-amber-700">
                <ProfileImage class="p-1 objetc-contain" />
            </div>
        </>
    );
});