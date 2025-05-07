import { component$ } from '@builder.io/qwik';
import { useTabStore } from '~/stores/main.tab.store';

export const MailButton = component$(() => {
    const tabStore = useTabStore();
    const isActive = tabStore.activeTab === 'mail';
    return (
        <>
            <button
                onClick$={() => (tabStore.activeTab = 'mail')}
                class={[
                    'shadow-xl size-12 min-size-12 fill-amber-800 bg-amber-200 border-2 border-t-4 border-b-1 border-amber-800 rounded-md transition-all duration-300 ease-in-out',
                    isActive ? '-mt-4' : 'mt-0',
                ]}
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="p-1" viewBox="0 0 32 32"><path d="M10.5 5a4.5 4.5 0 0 0-4.372 3.432l11.871 6.43l11.874-6.43A4.5 4.5 0 0 0 25.5 5zM6 19.5v-8.863l11.523 6.242a1 1 0 0 0 .953 0L30 10.637V19.5a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 6 19.5M4 9.758A4.5 4.5 0 0 0 2 13.5v6a8.5 8.5 0 0 0 8.5 8.5h11c1.56 0 2.935-.794 3.742-2H10.5A6.5 6.5 0 0 1 4 19.5z"/></svg>
            </button>
        </>
    );
});