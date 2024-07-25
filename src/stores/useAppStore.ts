import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";


export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a)
})))
