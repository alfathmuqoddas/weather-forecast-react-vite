import { create } from "zustand";
import generateRandomString from "../utils/generateRandomString";

interface LocationState {
  query: string;
  backgroundImageUrl: string;
  setQuery: (query: string) => void;
  setRandomBackground: () => void; // Action
}

const useStore = create<LocationState>((set) => ({
  query: "jakarta",
  backgroundImageUrl: `https://picsum.photos/seed/${generateRandomString()}/1280/720`,
  setQuery: (query: string) => set({ query }),
  setRandomBackground: () => {
    // Action that uses the utility function
    const background = `https://picsum.photos/seed/${generateRandomString()}/1280/720`;
    set((state) => ({ ...state, backgroundImageUrl: background }));
  },
}));

export default useStore;
