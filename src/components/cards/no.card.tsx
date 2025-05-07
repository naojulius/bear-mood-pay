import { component$ } from '@builder.io/qwik';
import NoBearImage from '~/assets/images/bear/001.png?jsx';


export const NoCard = component$(() => {
    return (
        <>
           <div class="h-[calc(100vh-6rem)] w-full inline-flex flex-col gap-0 text-center items-center justify-center">
                <NoBearImage class="w-1/2 h-auto"/>
                <div class="py-5 text-gray-500 w-2/3 text-lg font-semibold border-t-3 border-amber-900 -mt-0.5 rounded-t-md fredoka-condensed-bold">
                    You don't have any Bear Mood cards. Grab some in the Shop!
                </div>
                <div class="h-16 w-full inline-flex items-center justify-center">
                    <button class="fredoka-condensed-bold transition-all duration-50 px-4 p-2 font-bold text-lg bg-amber-400 text-amber-900 rounded-xl border-t-amber-900 active:border-t-2 border-2 border-t-4 border-b-1">
                        Shop mood cards now
                    </button>
                </div>
           </div>
        </>
    );
});