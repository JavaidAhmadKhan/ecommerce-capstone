import { createSelector } from "@reduxjs/toolkit";

export const selectCategoriesMap = (state) => {
  console.log("selecter fired");
  return state.categories.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};
