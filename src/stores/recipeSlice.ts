import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeServies"
import { Categories, Drink, Drinks, SearchFilter } from "../types"



export type RecipesSliceType = {
  categories: Categories,
  drinks: Drinks
  fetchCategories: () => Promise<void>,
  searchRecipes: (searchFilters: SearchFilter) => Promise<void>,
  selectRecipe: (id: Drink['idDrink']) => Promise<void>,

}

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: []
  },
  drinks: {
    drinks: []
  },
  fetchCategories: async () => {
    const categories = await getCategories();
    set({ categories })
  },
  searchRecipes: async (searchFilters) => {
    const drinks = await getRecipes(searchFilters);
    set({ drinks })
  },
  selectRecipe: async (id) => {
    console.log(id)
  }

})
