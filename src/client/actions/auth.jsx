import * as actions from "../constants/action-types";

export const initAuth = ({ accessToken, idToken }) => {
  return {
    type: actions.INIT_AUTH,
    payload: { accessToken, idToken }
  };
};
