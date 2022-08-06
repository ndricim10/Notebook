import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./notebook.scss";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getNoteByCategory } from "../Redux/Actions/allData";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";

export default function Category({
  titles,
  handleChange,
  handleSubmit,
  searchQuery,
  all_notes,
}) {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const [showButtons, setShowButtons] = useState(false);
  function showTrueButtons() {
    setShowButtons(true);
  }
  function showFalseButtons() {
    setShowButtons(false);
  }

  const category_name = all_notes.filter((note) => {
    return note.categoryId === categoryId;
  });

  useEffect(() => {
    dispatch(getNoteByCategory(categoryId));
  }, [dispatch, categoryId]);
  const { notes } = useSelector((state) => state.notesByCategory);
  console.log(notes);

  const cards = notes?.map((note) => (
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

  return (
    <div className="category">
      <div className="notebook">
        <Sidebar
          titles={titles}
          handleSubmit={handleSubmit}
          searchQuery={searchQuery}
          handleChange={handleChange}
        />
        <div className="categories">
          <p className="active">{category_name[0]?.category}</p>
          <div className="category_notes">{cards}</div>
        </div>
      </div>
    </div>
  );
}
