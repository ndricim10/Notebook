import "./notebook.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AddNote from "./AddNote";
import { addNote } from "../Redux/Actions/allData";

export default function Notebook({
  titles,
  handleChange,
  handleSubmit,
  searchQuery,
  categories,
  cards,
}) {
  const dispatch = useDispatch();
 


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
