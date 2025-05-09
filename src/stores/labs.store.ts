import {
    createContextId,
    useContext,
    useContextProvider,
    useStore,
  } from '@builder.io/qwik';
import { Laboratory } from '~/libs/laboratory/laboratory';
import { EmojiProcessingQueue } from '~/libs/queue/emoji-processing.queue';
  
  interface LabsState {
    queue: EmojiProcessingQueue[];
    laboratory: Laboratory;
    isProcessing: boolean;    
  }
  
  export const LabsStoreContext = createContextId<LabsState>('labs-store');
  
  /**
   * Initializes and provides the store globally
   */
  export const useLabsStoreProvider = () => {
    const store = useStore<LabsState>({
        isProcessing: false,
        queue: [],
        laboratory: {
          labName: '',
          labLevel: 0,
          energyConsumption: 0,
          chronoRate: 0,
        },
    });
    useContextProvider(LabsStoreContext, store);
    return store;
  };
  
  /**
   * Gets the user store from context
   */
  export const useLabsStore = () => useContext(LabsStoreContext);
  
  export const  queueEmoji = (store: LabsState, item: EmojiProcessingQueue) => {
    store.queue = [...store.queue, item];
  };

  export const  getCardById = (store: LabsState, id: number) => {
    const found = store.queue.find((q) => q.id === id);
    console.log("ID:==>", id)
    console.log("STORE:==>", store)
    console.log("FOUND==>", found)
    return found;
  };

  export const  removeEmojiById = (store: LabsState, id: number) => {
    store.queue = store.queue.filter((q) => q.id != id);
  };

  export const  getQueuedSize = (store: LabsState) => {
    return store.queue.length;
  };


  