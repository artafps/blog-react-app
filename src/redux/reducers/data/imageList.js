export const imageList = (state = [], action) => {
  switch (action.type) {
    case "ADD_IMAGE":
      let arry = [...state];
      console.log(arry);
      arry.push(action.pyload);
      return (state = arry);
    default:
      return state;
  }
};
