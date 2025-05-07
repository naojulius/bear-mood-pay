import {
    createContextId,
    useContext,
    useContextProvider,
    useStore,
  } from '@builder.io/qwik';
  
  interface DiamondState {
    balance: number;
  }
  
  export const DiamondStoreContext = createContextId<DiamondState>('diamond-store');
  
  /**
   * Initializes and provides the store globally
   */
  export const useDiamondStoreProvider = () => {
    const store = useStore<DiamondState>({
      balance: 0.00
    });
    useContextProvider(DiamondStoreContext, store);
    return store;
  };
  
  /**
   * Gets the user store from context
   */
  export const useDiamondStore = () => useContext(DiamondStoreContext);
  