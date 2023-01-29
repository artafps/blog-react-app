
export const allBlog = (state = [], action) => {
    switch (action.type) {
      case "SAVE_BLOG":
        return (state = action.pyload);
      default:
        return state;
    }
  };
  