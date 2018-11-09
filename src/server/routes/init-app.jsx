import reducer from "../../client/reducers";

export default async function initApp({ awaitInits }) {
  await awaitInits();

  return {
    reducer,
    initialState: {
      checkBox: { checked: false },
      number: { value: 999 },
      username: { value: "" },
      textarea: { value: "" },
      selectedOption: { value: "0-13" }
    }
  };
}
