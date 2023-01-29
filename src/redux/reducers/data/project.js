
export const allProject = (state = [], action) => {
    switch (action.type) {
      case "SAVE_PROJECT":
        return (state = action.pyload);
      default:
        return state;
    }
  };
  