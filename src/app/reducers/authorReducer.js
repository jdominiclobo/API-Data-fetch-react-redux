const authorReducer = (intitalState = [], action) => {
  switch (action.type) {
    case "GET_AUTHORS": {
      return [...action.payload];
    }
    default: {
      return [...intitalState];
    }
  }
};
export default authorReducer;
