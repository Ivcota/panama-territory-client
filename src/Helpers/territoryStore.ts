import create from "zustand";
import { devtools } from "zustand/middleware";

export interface TerritoryInterface {
  account: number | null;
  id: number | null;
  name: string;
  notes: string;
  photo: string;
  territory_type: string;
}

interface TerritoryState {
  selectedCard: {
    account: number | null;
    id: number | null;
    name: string;
    notes: string;
    photo: string;
    territory_type: string;
  };
}

interface TerritoryStateZ extends TerritoryState {
  setSelectedCard: (card: TerritoryInterface) => void;
}

export const useTerritoryStore = create<TerritoryStateZ>(
  devtools((set) => ({
    selectedCard: {
      id: null,
      account: null,
      name: "",
      notes: "",
      photo: "",
      territory_type: "",
    },
    setSelectedCard: (card) => {
      set((state) => {
        return {
          selectedCard: card,
        };
      });
    },
  }))
);
