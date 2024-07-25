import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeServies"
import { Categories, SearchFilter } from "../types"



export type RecipesSliceType = {
  categories: Categories
  fetchCategories: () => Promise<void>,
  searchRecipes: (searchFilters: SearchFilter) => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: []
  },
  fetchCategories: async () =>{
    const categories = await getCategories();
    set({categories})
  },
  searchRecipes: async (searchFilters) =>{

  }

})
