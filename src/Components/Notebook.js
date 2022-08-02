import "./notebook.scss";
import request from "../api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNotes } from "../Redux/Actions/allData";
import { Col, Row } from "react-bootstrap";

export default function Notebook() {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getNotes());
    
  }, [dispatch]);

  const allNotes = notes.map((note) => (
    <span className="note_title" key={note.id}>
      {note.title}
    </span>
  ));

  const myCategories = notes.map(note=>{
    return note.category
  })
  
  const uniqueCategories = [...new Set(myCategories)]

  const categories = uniqueCategories.map((note, i) => (
    <span className="note_title" key={i}>
      {note}
    </span>
  ));

  const cards = notes.map((note) => (
    <div key={note.id} className="notebook_notes_card">
      <span className="card_title">{note.title}</span>
      <span className="card_description">{note.description}</span>
      <span className="card_category">
        <span className="card_category_span">Category:</span> {note.category}
      </span>
    </div>
  ));

  return (
    <>
      <div className="notebook">
        <div className="notebook_sidebar">
          <div className="notebook_sidebar_searchBar">
            <form action="">
              <input type="search" placeholder="Search for a note" />
              <button>Search</button>
            </form>
            <h3>All Notes</h3>
          </div>
          <div className="notebook_sidebar_fixed">{allNotes}</div>
        </div>
        <div className="notebook_categories">{categories}</div>
        <div className="notebook_notes">{cards}</div>
      </div>
    </>
  );
}
