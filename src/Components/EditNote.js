import React, { useState } from "react";
import "./addNote.scss";
import { useDispatch, useSelector } from "react-redux";
import { addNote, editNote } from "../Redux/Actions/allData";
import {IoMdRemoveCircleOutline} from 'react-icons/io'

export default function EditNote({note, setShowEdit}) {
  const dispatch = useDispatch();
  const [myTitle, setMyTitle] = useState("");
  const [myCategoryName, setMyCategoryName] = useState("");
  const [myDescription, setMyDescription] = useState("");
  const [myCategoryId, setMyCategoryId] = useState("");

  function edit_note(e) {
    e.preventDefault();
    if (
      myTitle.length === 0 ||
      myCategoryId.length === 0 ||
      myDescription.length === 0 ||
      myCategoryName.length === 0
    ) {
      alert("each field is required");
    } else {
      dispatch(editNote(note.id, myTitle, myDescription, myCategoryName, myCategoryId));
      setMyCategoryId("")
      setMyTitle("")
      setMyCategoryName("")
      setMyDescription("")
      setShowEdit(false)
    }
  }

  return (
    <div className="add_note">
      <div className="remove" onClick={()=>setShowEdit(false)}>
        <IoMdRemoveCircleOutline size={30}/>
      </div>
      <form action="">
        <input type="text" value={myTitle} onChange={(e)=>setMyTitle(e.target.value)} placeholder="Note's title" />
        <input type="text" value={myCategoryName} onChange={(e)=>setMyCategoryName(e.target.value)} placeholder="Note's Category name" />
        <textarea value={myDescription} onChange={(e)=>setMyDescription(e.target.value)} placeholder="Note's description" rows="10"></textarea>
        <input type="text" value={myCategoryId} onChange={(e)=>setMyCategoryId(e.target.value)} placeholder="Note's Category ID" />
        <div className="btn">
          <button onClick={edit_note}>Edit Note</button>
        </div>
      </form>
    </div>
  );
}
