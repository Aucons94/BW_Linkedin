const InitialState = {
  info: [],
};

const profileReducers = (state = InitialState, action) => {
  switch (action.type) {
    case "NAVBAR_INFO":
      console.log("NAVBAR_INFO payload:", action.payload);
      return {
        ...state,
        info: action.payload,
      };
    default:
      console.log("NAVBAR_INFO default");
      return state;
  }
};

export default profileReducers;
