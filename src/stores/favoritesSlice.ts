import { StateCreator } from 'zustand'
import { Recipe } from '../types'


export type FavoritesSliceType = {
  favorites: Recipe[],
  hendleClickFavorite: (recipe: Recipe) => void,
  favoriteExists: (id: Recipe['idDrink']) => boolean
  loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
  favorites: [],
  favoriteExists: (id) => {
    return get().favorites.some(favorite => favorite.idDrink === id)
  },
  hendleClickFavorite: (recipe) => {
    if (get().favoriteExists(recipe.idDrink)) {
      set({
        favorites: get().favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
      })
    } else {
      set({
        favorites: [...get().favorites, recipe]
      })
    }
    localStorage.setItem('favorites', JSON.stringify(get().favorites))
  },
  loadFromStorage: () => {
    const storedFavorites = localStorage.getItem('favorites')
    if (storedFavorites) {
      set({
        favorites: JSON.parse(storedFavorites)
      })
    }
  }
})
