import { component$ } from "@builder.io/qwik";


export const CardList = component$(() => {
    // const cards = useSignal([]); //useGetCards();
    return (
        <>
        
            <div class="h-[calc(100vh-6rem)] w-full overflow-y-scroll">
                {/* <div class="flex flex-wrap items-start gap-0">
                    {cards.value.map((card: any) => (
                       <BearCard />
                    ))}
                    <div class="h-[20rem]"></div>
                </div> */}
            </div>
        </>
    );
});