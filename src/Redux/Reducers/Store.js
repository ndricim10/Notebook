import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";
  import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getAllNotes } from "./NotesReducers";

const reducer = combineReducers({
    notes: getAllNotes,
})

const store = createStore(
    reducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default store