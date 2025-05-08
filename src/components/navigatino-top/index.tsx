import { $, component$, useOnWindow } from "@builder.io/qwik";
// import DiamondImage from '~/assets/images/coins/diamond.png?jsx';
import Avatar from '~/assets/images/avatars/wasp.png?jsx';
import { initDataUser } from '@telegram-apps/sdk';

export const NavigationTop = component$(() => {
    
    useOnWindow(
        'load', $(() => {
            alert(JSON.stringify(initDataUser()))
        })
    );
    
    return (
        <>
            {/* <div class="h-16 w-full inline-flex gap-2 items-center justify-center p-2 bg-orange-900 shadow-xs">
                <Profile />
                <div class="w-full p-2">
                    <div class="w-full flex  flex-row gap-2">
                        <Diamond />
                        <Coin />
                    </div>
                </div>
            </div> */}
             <div class="h-16 w-full inline-flex gap-2 items-center justify-between p-2">
                <div class="inline-flex items-center gap-2">
                    <div class="size-12 border-2 border-gray-500 rounded-md bg-amber-200">
                        <Avatar />
                    </div>
                    <div class="inline-flex flex-col gap-0">
                        <span class="text-xl font-bold fredoka-condensed-bold">
                            NAO Julius
                        </span>
                        <span class="text-sm font-bold text-gray-500">
                            Lv.0
                        </span>
                    </div>
                </div>
                {/* <div class="w-1/3 h-8 bg-gray-200 rounded-r-full inline-flex items-center justify-between pr-2 border-1 border-l-0">
                    <DiamondImage class="size-9 -ml-2 drop-shadow-[0_0_0.05rem_black]" />
                    <div class="font-bold fredoka-condensed-bold">
                        0.0001
                    </div>
                </div> */}
            </div>
        </>
    );
});