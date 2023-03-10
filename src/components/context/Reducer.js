const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFecting: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFecting: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFecting: false,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        isFecting: false,
        error: false,
      };
    default:
      return state;
  }
};

export default Reducer;
