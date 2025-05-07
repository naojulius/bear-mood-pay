import { component$ } from '@builder.io/qwik';
import { useTabStore } from '~/stores/main.tab.store';


export const CatalogButton = component$(() => {
    const tabStore = useTabStore();
    const isActive = tabStore.activeTab === 'card';

    return (
        <>
            <button 
                onClick$={() => (tabStore.activeTab = 'card')}
                class={[
                  'shadow-xl size-12 min-size-12 fill-amber-800 bg-amber-200 border-2 border-t-4 border-b-1 border-amber-800 rounded-md transition-all duration-300 ease-in-out',
                  isActive ? '-mt-4' : 'mt-0',
                ]}
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="p-1" viewBox="0 0 24 24"><path d="M18 3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 10a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z"/></svg>
            </button>
        </>
    );
});