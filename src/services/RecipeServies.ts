import axios from "axios";
import { CategoriesAPIResponseSchema } from "../utils/recipes-schema";
import { SearchFilter } from '../types/index';

export async function getCategories() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const { data } = await axios(url);
  const result = CategoriesAPIResponseSchema.safeParse(data);
  if(result.success){
    return result.data;
  }
}

export async function getRecipes(filters: SearchFilter){
  const { ingredient, category } = filters;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}&i=${ingredient}`;
  const { data } = await axios(url);
  console.log(data);

}
