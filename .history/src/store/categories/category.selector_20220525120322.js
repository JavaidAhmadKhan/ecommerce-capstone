export const selectCategoriesMap = (state) => state.categories.categoriesreduce((acc, docSnapshot) => {
  const { title, items } = docSnapshot.data();
  acc[title.toLowerCase()] = items;
  return acc;
}, {});
