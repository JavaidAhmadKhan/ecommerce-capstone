export const CATEGORIES_INITIAL_STATE = {
  categoriesMapping: {},
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case "CATEGORIES_INITIAL_STATE":
      return {
        ...state,
        categoriesMap: payload,
      };
  }
};
