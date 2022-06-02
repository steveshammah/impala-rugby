const articlesReducer = (action, state) => {
  switch (action.type) {
    case "ALL":
      return { state };
    case "DELETE":
      return { state };

    case "ADD":
      return { state };
    default:
      return state;
  }
};
