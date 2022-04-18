const teamReducer = (state, action) => {
  switch (action.type) {
    case "addMember":
      console.log("ADD PLAYER");
      return {};
    case "deleteMember":
      console.log("DELETE PLAYER");

      return {};
    default:
      return state;
  }
};

export default teamReducer;
