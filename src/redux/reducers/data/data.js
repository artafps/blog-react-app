
export const allData = (state = [], action) => {
  switch (action.type) {
    case "SAVE_DATA":
      return (state = action.pyload);
    default:
      return state;
  }
};
