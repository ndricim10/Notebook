import React, { useState } from "react";
import "./addNote.scss";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../Redux/Actions/allData";

export default function AddNote({handleFalseAddNote}) {
  const dispatch = useDispatch();
  const [myTitle, setMyTitle] = useState("");
  const [myCategoryName, setMyCategoryName] = useState("");
  const [myDescription, setMyDescription] = useState("");
  const [myCategoryId, setMyCategoryId] = useState("");

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
      setMyCategoryId("")
      setMyTitle("")
      setMyCategoryName("")
      setMyDescription("")
      handleFalseAddNote()
    }
  }

  return (
    <div className="add_note">
      <form action="">
        <input type="text" value={myTitle} onChange={(e)=>setMyTitle(e.target.value)} placeholder="Note's title" />
        <input type="text" value={myCategoryName} onChange={(e)=>setMyCategoryName(e.target.value)} placeholder="Note's Category name" />
        <textarea value={myDescription} onChange={(e)=>setMyDescription(e.target.value)} placeholder="Note's description" rows="10"></textarea>
        <input type="text" value={myCategoryId} onChange={(e)=>setMyCategoryId(e.target.value)} placeholder="Note's Category ID" />
        <div className="btn">
          <button onClick={add_note}>Add Note</button>
        </div>
      </form>
    </div>
  );
}
