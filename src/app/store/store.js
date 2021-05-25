import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authorReducer from "../reducers/authorReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      authors: authorReducer,
    }),
    applyMiddleware(thunk)
  );
  // console.log(store);
  return store;
};
export default configureStore;
