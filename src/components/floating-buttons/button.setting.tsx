import { component$ } from '@builder.io/qwik';
import { useTabStore } from '~/stores/main.tab.store';

export const SettingButton = component$(() => {
    const tabStore = useTabStore();
    const isActive = tabStore.activeTab === 'setting';

    return (
        <>
            <button 
                onClick$={() => (tabStore.activeTab = 'setting')}
                class={[
                    'shadow-xl size-12 min-size-12 fill-amber-800 bg-amber-200 border-2 border-t-4 border-b-1 border-amber-800 rounded-md transition-all duration-300 ease-in-out',
                    isActive ? '-mt-4' : 'mt-0',
                ]}
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="p-1" viewBox="0 0 512 512"><path d="M256 176a80 80 0 1 0 80 80a80.24 80.24 0 0 0-80-80m172.72 80a165.5 165.5 0 0 1-1.64 22.34l48.69 38.12a11.59 11.59 0 0 1 2.63 14.78l-46.06 79.52a11.64 11.64 0 0 1-14.14 4.93l-57.25-23a176.6 176.6 0 0 1-38.82 22.67l-8.56 60.78a11.93 11.93 0 0 1-11.51 9.86h-92.12a12 12 0 0 1-11.51-9.53l-8.56-60.78A169.3 169.3 0 0 1 151.05 393L93.8 416a11.64 11.64 0 0 1-14.14-4.92L33.6 331.57a11.59 11.59 0 0 1 2.63-14.78l48.69-38.12A175 175 0 0 1 83.28 256a165.5 165.5 0 0 1 1.64-22.34l-48.69-38.12a11.59 11.59 0 0 1-2.63-14.78l46.06-79.52a11.64 11.64 0 0 1 14.14-4.93l57.25 23a176.6 176.6 0 0 1 38.82-22.67l8.56-60.78A11.93 11.93 0 0 1 209.94 26h92.12a12 12 0 0 1 11.51 9.53l8.56 60.78A169.3 169.3 0 0 1 361 119l57.2-23a11.64 11.64 0 0 1 14.14 4.92l46.06 79.52a11.59 11.59 0 0 1-2.63 14.78l-48.69 38.12a175 175 0 0 1 1.64 22.66"/></svg>
            </button>
        </>
    );
});