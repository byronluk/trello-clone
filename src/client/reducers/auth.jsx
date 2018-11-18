import { INIT_AUTH } from "../constants/action-types"; // eslint-disable-line

const INIT_STATE = {
  isAuthenticated: false,
  idToken: ""
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case INIT_AUTH:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default authReducer;
