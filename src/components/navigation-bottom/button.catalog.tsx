import { component$ } from '@builder.io/qwik';
import { useTabStore } from '~/stores/main.tab.store';
import Image from '~/assets/images/icons/catalog.png?jsx';

export const CatalogButton = component$(() => {
    const tabName = 'card';
    const tabStore = useTabStore();
    const isActive = tabStore.activeTab === tabName;

    return (
        <>
            <button 
                onClick$={() => (tabStore.activeTab = tabName)}
                class={[
                    'h-full w-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out',
                    isActive ? 'bg-amber-200' : 'bg-amber-100',
                ]}
            >
                <Image class="size-18" />
                <span class="text-md font-bold">Emojis</span>
            </button>   
        </>
    );
});