import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";
  import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getAllNotes, getNotesByCategory, getNotesByCategoryName, getSingleNote } from "./NotesReducers";

const reducer = combineReducers({
    notes: getAllNotes,
    noteByID: getSingleNote,
    notesByCategory: getNotesByCategory,
    notesByCategoryName: getNotesByCategoryName
})

const store = createStore(
    reducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default store