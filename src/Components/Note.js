import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "./notebook.scss";
import { useDispatch, useSelector } from "react-redux";
import { getNoteById } from "../Redux/Actions/allData";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Note({
  titles,
  handleChange,
  handleSubmit,
  searchQuery,
}) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { note } = useSelector((state) => state.noteByID);
  useEffect(() => {
    dispatch(getNoteById(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="single_note">
        <div className="notebook">
          <Sidebar
            titles={titles}
            handleSubmit={handleSubmit}
            searchQuery={searchQuery}
            handleChange={handleChange}
          />

          <div className="my_note">
            {/* <div className="notebook_categories">{categories}</div> */}
            <div className="notebook_notes_card">
              <span className="card_title">{note?.title}</span>
              <span className="card_description">{note?.description}</span>
              <Link to={`/category/${note?.categoryId}`} className="a">
                <span className="card_category">
                  <span className="card_category_span">Category:</span>{" "}
                  {note?.category}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
