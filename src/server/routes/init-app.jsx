import reducer from "../../client/reducers";

export default async function initApp({ awaitInits }) {
  await awaitInits();

  return {
    reducer,
    initialState: {
      auth: { isAuthenticated: false }
    }
  };
}
