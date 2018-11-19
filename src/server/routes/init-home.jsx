import reducer from "../../client/reducers";

export default function initHome() {
  return {
    reducer,
    initialState: {
      auth: { isAuthenticated: false }
    }
  };
}
