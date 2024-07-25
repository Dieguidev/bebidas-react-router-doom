import { StateCreator } from 'zustand'
import { Recipe } from '../types'

export type FavoritesSliceType = {
  favorites: Recipe[],
  hendleClickFavorite: (recipe: Recipe) => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
  favorites: [],
  hendleClickFavorite: (recipe) => {
    if (get().favorites.some(favorite => favorite.idDrink === recipe.idDrink)) {
      set({
        favorites: get().favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
      })
    } else {
      console.log('no existe');
      set({
        favorites: [...get().favorites, recipe]
      })
    }

  }
})
