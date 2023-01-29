
export const allGBlog = (state = [], action) => {
    switch (action.type) {
      case "SAVE_GBLOG":
        return (state = action.pyload);
      default:
        return state;
    }
  };
  