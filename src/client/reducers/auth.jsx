import * as actions from "../constants/action-types"; // eslint-disable-line

const INIT_STATE = {
  isAuthenticated: false,
  idToken: "",
  accessToken: ""
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actions.INIT_AUTH:
      return { ...state, ...action.payload };
    case actions.INIT_AUTH_SUCCESS:
      return { ...state, isAuthenticated: true };
    case actions.INIT_AUTH_FAIL:
      return { ...state };

    default:
      return state;
  }
};

export default authReducer;
