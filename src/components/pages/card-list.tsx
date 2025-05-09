import { component$ } from "@builder.io/qwik";
import { EmojiCard } from "../emoji";
import { ThreeDViewer } from "../factory";


export const CardList = component$(() => {
    // const cards = useSignal([]); //useGetCards();
    return (
        <>
            <div class="h-[calc(100vh-6rem)] w-full overflow-y-scroll">
                {/* <div class="inline-flex flex-wrap w-ffull">
                    
                </div> */}
<div class="grid grid-cols-3 gap-2">
<EmojiCard />
</div>


            </div>
            {/* <div class="h-[calc(100vh-10rem)] w-full overflow-hidden">
                <ThreeDViewer />
            </div> */}
        </>
    );
});