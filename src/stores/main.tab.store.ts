import {
    createContextId,
    useContext,
    useContextProvider,
    useStore,
} from '@builder.io/qwik';

interface TabState {
    activeTab: 'card' | 'shop' | 'exchange' | 'setting' | 'mail';
  }

export const tabStoreContext = createContextId<TabState>('tab-store');

/**
 * Initializes and provides the store globally
 */
export const useTabStoreProvider = () => {
    const store = useStore<TabState>({
        activeTab: 'card'
    });
    useContextProvider(tabStoreContext, store);
    return store;
};

/**
 * Gets the user store from context
 */
export const useTabStore = () => useContext(tabStoreContext);


/**
 * Adds coins to the store
 */
export const seTab = (store: TabState, _activeTab: any) => {
    store.activeTab = _activeTab;
};