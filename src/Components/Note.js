import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./notebook.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, getNoteById } from "../Redux/Actions/allData";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import EditNote from "./EditNote";

export default function Note({
  titles,
  handleChange,
  handleSubmit,
  searchQuery,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [showEdit, setShowEdit] = useState(false);

  const { note } = useSelector((state) => state.noteByID);
  useEffect(() => {
    dispatch(getNoteById(id));
  }, [dispatch, id]);

  function delete_note(myId) {
    dispatch(deleteNote(myId));
    navigate(`../`);
  }

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
            {showEdit && (
              <div className="add-note">
                {" "}
                <EditNote note={note} setShowEdit={setShowEdit} />
              </div>
            )}
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
            <div className="buttons">
              <span className="span-edit" onClick={() => setShowEdit(true)}>
                Edit
              </span>
              <span className="span-delete" onClick={()=>delete_note(id)}>
                Delete
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
