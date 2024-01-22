const InitialState = {
  info: {},
};

const profileReducers = (state = InitialState, action) => {
  switch (action.type) {
    case "NAVBAR_INFO":
      return {
        ...state,
        info: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducers;
