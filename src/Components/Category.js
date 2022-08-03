import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "./notebook.scss";
import { useDispatch, useSelector } from "react-redux";
import {Link, useParams} from 'react-router-dom'
import { getNoteByCategory } from "../Redux/Actions/allData";

export default function Category({
  titles,
  handleChange,
  handleSubmit,
  searchQuery,
}) {
  const dispatch = useDispatch();
  const {categoryId} = useParams()
  
  useEffect(()=>{
    dispatch(getNoteByCategory(categoryId))
    
  }, [dispatch, categoryId])
  const {notes} = useSelector(state=>state.notesByCategory)
  console.log(notes)

  const cards = notes?.map((note) => (
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

  return (
    <div className="category">
      <div className="notebook">
        <Sidebar
          titles={titles}
          handleSubmit={handleSubmit}
          searchQuery={searchQuery}
          handleChange={handleChange}
        />
        <div className="category_notes">{cards}</div>
      </div>
    </div>
  );
}
