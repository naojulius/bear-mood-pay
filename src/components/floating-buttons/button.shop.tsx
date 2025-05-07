import { component$ } from '@builder.io/qwik';
import { useTabStore } from '~/stores/main.tab.store';

export const ShopButton = component$(() => {
    const tabStore = useTabStore();
    const isActive = tabStore.activeTab === 'shop';

    return (
        <>
            <button 
                onClick$={() => (tabStore.activeTab = 'shop')}
                class={[
                    'shadow-xl size-12 min-size-12 fill-amber-800 bg-amber-200 border-2 border-t-4 border-b-1 border-amber-800 rounded-md transition-all duration-300 ease-in-out',
                    isActive ? '-mt-4' : 'mt-0',
                ]}
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="p-1" viewBox="0 0 24 24"><path d="M12 13a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2a5 5 0 0 1-5 5m0-10a3 3 0 0 1 3 3H9a3 3 0 0 1 3-3m7 3h-2a5 5 0 0 0-5-5a5 5 0 0 0-5 5H5c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"/></svg>
            </button>
        </>
    );
});