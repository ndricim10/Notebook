import React, { useState } from "react";
import "./addNote.scss";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../Redux/Actions/allData";

export default function AddNote() {
  const dispatch = useDispatch();
  const [myTitle, setMyTitle] = useState("");
  const [myCategoryName, setMyCategoryName] = useState("");
  const [myDescription, setMyDescription] = useState("");
  const [myCategoryId, setMyCategoryId] = useState("");
  const { notes } = useSelector((state) => state.notes);

  function add_note(e) {
    e.preventDefault();
    if (
      myTitle.length === 0 ||
      myCategoryId.length === 0 ||
      myDescription.length === 0 ||
      myCategoryName.length === 0
    ) {
      alert("each field is required");
    } else {
      dispatch(addNote(myTitle, myDescription, myCategoryName, myCategoryId));
      console.log("notes", notes);
    }
  }

  return (
    <div className="add_note">
      <form action="">
        <input type="text" onChange={(e)=>setMyTitle(e.target.value)} placeholder="Note's title" />
        <input type="text" onChange={(e)=>setMyCategoryName(e.target.value)} placeholder="Note's Category name" />
        <textarea onChange={(e)=>setMyDescription(e.target.value)} placeholder="Note's description" rows="10"></textarea>
        <input type="text" onChange={(e)=>setMyCategoryId(e.target.value)} placeholder="Note's Category ID" />
        <div className="btn">
          <button onClick={add_note}>Add Note</button>
        </div>
      </form>
    </div>
  );
}
