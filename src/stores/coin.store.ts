import {
    createContextId,
    useContext,
    useContextProvider,
    useStore,
} from '@builder.io/qwik';

interface CoinState {
    balance: number;
}

export const CoinStoreContext = createContextId<CoinState>('coin-store');

/**
 * Initializes and provides the store globally
 */
// export const usCoinStoreProvider = () => {
export const useCoinStoreProvider = () => {
    const store = useStore<CoinState>({
        balance: 0.00
    });
    useContextProvider(CoinStoreContext, store);
    return store;
};

/**
 * Gets the user store from context
 */
export const useCoinStore = () => useContext(CoinStoreContext);


/**
 * Adds coins to the store
 */
export const addCoins = (store: CoinState, amount: number) => {
    store.balance += amount;
};