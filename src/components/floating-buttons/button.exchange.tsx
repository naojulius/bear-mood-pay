import { component$ } from '@builder.io/qwik';
import { useTabStore } from '~/stores/main.tab.store';

export const ExchangeButton = component$(() => {
    const tabStore = useTabStore();
    const isActive = tabStore.activeTab === 'exchange';
    return (
        <>
            <button
                onClick$={() => (tabStore.activeTab = 'exchange')}
                class={[
                    'shadow-xl size-12 min-size-12 fill-amber-800 bg-amber-200 border-2 border-t-4 border-b-1 border-amber-800 rounded-md transition-all duration-300 ease-in-out',
                    isActive ? '-mt-4' : 'mt-0',
                ]}
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="p-1" viewBox="0 0 24 24"><path d="M20.5 5.835A10.49 10.49 0 0 0 12 1.5c-5.427 0-9.89 4.115-10.443 9.396l-.104.994l1.99.209l.103-.995A8.501 8.501 0 0 1 19.213 7.5H17.5v2h5v-7h-2zM11 6v1a3 3 0 0 0 0 6h2a1 1 0 1 1 0 2H8.5v2H11v1h2v-1a3 3 0 1 0 0-6h-2a1 1 0 0 1 0-2h4.5V7H13V6zm9.557 5.901l-.104.995A8.501 8.501 0 0 1 4.787 16.5H6.5v-2h-5v7h2v-3.335A10.49 10.49 0 0 0 12 22.5c5.426 0 9.89-4.115 10.442-9.396l.104-.994z" /></svg>
            </button>
        </>
    );
});