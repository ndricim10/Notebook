import "./notebook.scss";
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AddNote from "./AddNote";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import EditNote from "./EditNote";

export default function Notebook({
  titles,
  handleChange,
  handleSubmit,
  searchQuery,
  notes,
  AddNoteState,
  handleTrueAddNote,
  handleFalseAddNote,
}) {
  const navigate = useNavigate();

  const [showButtons, setShowButtons] = useState(false);

  const [showEditButton, setShowEditButton] = useState(false);

  function showTrueButtons() {
    setShowButtons(true);
  }
  function showFalseButtons() {
    setShowButtons(false);
  }

  const cards = notes.map((note) => (
    <div
      key={note.id}
      className="notebook_notes_card"
      onMouseEnter={showTrueButtons}
      onMouseLeave={showFalseButtons}
    >
      {showButtons && (
        <div className="delete">
          <AiFillDelete size={30} />
        </div>
      )}

      <Link to={`/Notes/${note.id}`} className="a">
        <span className="card_title">{note.title}</span>
      </Link>
      <span className="card_description">{note.description}</span>
      <Link to={`/category/${note.categoryId}`} className="a">
        <span className="card_category">
          <span className="card_category_span">Category:</span> {note.category}
        </span>
      </Link>
    </div>
  ));

  const myCategories = notes.map((note) => {
    return note.category;
  });

  function log(note) {
    const cat = notes.filter((s) => {
      return s.category === note;
    });
    navigate(`../category/${cat[0].categoryId}`);
  }
  const uniqueCategories = [...new Set(myCategories)];

  const categories = uniqueCategories.map((note, i) => (
    <span onClick={() => log(note)} className="category_title" key={i}>
      {note}
    </span>
  ));

  return (
    <>
      <div className="notebook">
        <Sidebar
          titles={titles}
          handleSubmit={handleSubmit}
          searchQuery={searchQuery}
          handleChange={handleChange}
        />
        <div className="right-section">
          {AddNoteState && (
            <div className="add-note">
              <AddNote
                handleFalseAddNote={handleFalseAddNote}
                handleTrueAddNote={handleTrueAddNote}
              />
              <div className="space-form"></div>
            </div>
          )}

          <div className="addNote" onClick={handleTrueAddNote}>
            <AiOutlinePlusCircle size={40} />
          </div>
          <div className="notebook_categories">{categories}</div>
          <div className="notebook_notes">{cards}</div>
        </div>
      </div>
    </>
  );
}
