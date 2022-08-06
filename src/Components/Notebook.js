import "./notebook.scss";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AddNote from "./AddNote";

export default function Notebook({
  titles,
  handleChange,
  handleSubmit,
  searchQuery,
  notes,
  AddNoteState,
  handleTrueAddNote,
  handleFalseAddNote
}) {

  const navigate = useNavigate()

  const cards = notes.map((note) => (
    <div key={note.id} className="notebook_notes_card">
      <span className="card_title">{note.title}</span>
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

  function log(note){
    const cat = notes.filter(s=>{
      return s.category===note
    })
    navigate(`../category/${cat[0].categoryId}`);
  }
  const uniqueCategories = [...new Set(myCategories)];

  const categories = uniqueCategories.map((note, i) => (
    <span onClick={()=>log(note)} className="category_title" key={i}>
      {note}
    </span>
  ));
  
var today = new Date();
console.log("current date", today)

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
              <AddNote handleFalseAddNote={handleFalseAddNote} />
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
