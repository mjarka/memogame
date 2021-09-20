import create from "zustand";

const useStore = create((set) => ({
  points: 0,
  increasePoints: () => set((state) => ({ points: state.points + 1 })),
}));
export default useStore;
