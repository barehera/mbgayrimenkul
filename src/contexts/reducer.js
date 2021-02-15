export const initialState = {
  user: null,
  blogs: [],
  adds: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    //USER ACTIONS
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    //BLOG ACTIONS
    case "SET_BLOG":
      return {
        ...state,
        blogs: action.blogs,
      };

    //ADDS ACTION
    case "SET_ADDS":
      return {
        ...state,
        adds: action.adds,
      };

    default:
      return state;
  }
};

export default reducer;
