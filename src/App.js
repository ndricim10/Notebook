import Notebook from "./Components/Notebook";
import "./Components/notebook.scss";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Note from "./Components/Note";
import { getNotes } from "./Redux/Actions/allData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Category from "./Components/Category";

function App() {
  const { notes } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  const [searchQuery, setSearchQuery] = useState("");

  const titles = notes
    .filter((note) => {
      return (
        note.title.toLowerCase().match(searchQuery.toLocaleLowerCase()) ||
        note.description.toLowerCase().match(searchQuery.toLocaleLowerCase())
      );
    })
    .map((note) => (
      <Link to={`/notes/${note.id}`} className="note_title a">
        <span className="note_title" key={note.id}>
          {note.title.length < 25
            ? note.title
            : note.title.substring(0, 25) + `...`}
        </span>
      </Link>
    ));

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              // <Layout>
              <Notebook
                notes={notes}
                titles={titles}
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            path="/notes/:id"
            element={
              <Note
                notes={notes}
                titles={titles}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                searchQuery={searchQuery}
              />
            }
          />

          <Route
            path="/category/:categoryId"
            element={
              <Category
                titles={titles}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                searchQuery={searchQuery}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;