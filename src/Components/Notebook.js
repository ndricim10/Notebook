import "./notebook.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AddNote from "./AddNote";


export default function Notebook({
  titles,
  handleChange,
  handleSubmit,
  searchQuery,
  notes
}) {
  const dispatch = useDispatch();
  
  const cards = notes.map((note) => (
    <div key={note.id} className="notebook_notes_card">
      <span className="card_title">{note.title}</span>
      <span className="card_description">{note.description}</span>
      <Link to={`/category/${note.categoryId}`} className='a'>
      <span className="card_category">
        <span className="card_category_span">Category:</span> {note.category}
      </span>
      </Link>
    </div>
  ));

  const myCategories = notes.map((note) => {
    return note.category;
  });

  const uniqueCategories = [...new Set(myCategories)];

  const categories = uniqueCategories.map((note, i) => (
    <span className="category_title" key={i}>
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
          <div className="add-note">
            <AddNote
              // noteId={noteId}
              // noteTitle={noteTitle}
              // noteDescription={noteDescription}
              // noteCategory={noteCategoryName}
              // noteCategoryId={noteCategoryId}
              // handleChange={handleChange}
            />
          </div>
          <div className="addNote">
            <AiOutlinePlusCircle size={40} />
          </div>
          <div className="notebook_categories">{categories}</div>
          <div className="notebook_notes">{cards}</div>
        </div>
      </div>
    </>
  );
}
