import {
  createContextId,
  useContext,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';
import { EmojiProcessingQueue } from '~/libs/queue/emoji-processing.queue';

// Avoid class instances in store — use plain object type instead
export interface LaboratoryState {
  labName: string;
  labLevel: number;
  energyConsumption: number;
  chronoRate: number;
}

export interface LabsState {
  queue: EmojiProcessingQueue[];
  laboratory: LaboratoryState;
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
 * Gets the labs store from context
 */
export const useLabsStore = () => useContext(LabsStoreContext);

/**
 * Add emoji to queue
 */
export const queueEmoji = (store: LabsState, item: EmojiProcessingQueue) => {
  store.queue = [...store.queue, item];
};

/**
 * Get first emoji card (you may want to find by ID later)
 */
export const getCardById = (store: LabsState, id: number) => {
  console.log("ID:==>", id);
  console.log("STORE:==>", store.queue);
  return store.queue.find((q) => q.id === id) ?? null;
};

/**
 * Remove emoji by ID
 */
export const removeEmojiById = (store: LabsState, id: number) => {
  console.log("==+>",  store.queue)
  store.queue = store.queue.filter((q) => q.id !== id);
};

/**
 * Get the size of the queue
 */
export const getQueuedSize = (store: LabsState) => {
  console.log("==> from get card: ", store.queue)
  return store.queue.length;
};
