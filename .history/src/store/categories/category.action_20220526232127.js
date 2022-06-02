import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utilis";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

  export const fetchCategoriesSuccess = () => createAction(CATEGORATIONS_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS);
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
