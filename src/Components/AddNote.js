import React, { useEffect, useState } from "react";
import "./addNote.scss";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../Redux/Actions/allData";
import {IoMdRemoveCircleOutline} from 'react-icons/io'
import moment from "moment";

export default function AddNote({handleFalseAddNote, notes}) {
  const dispatch = useDispatch();
  const [myTitle, setMyTitle] = useState("");
  const [myCategoryName, setMyCategoryName] = useState("");
  const [myDescription, setMyDescription] = useState("");
  const [myCategoryId, setMyCategoryId] = useState("");
  const [publishedAt, setPublishedAt] = useState(null)

useEffect(()=>{
  let date = new Date
  setPublishedAt(moment(date).format())
}, [notes])
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
      
      dispatch(addNote(myTitle, myDescription, myCategoryName, myCategoryId, publishedAt));
      setMyCategoryId("")
      setMyTitle("")
      setMyCategoryName("")
      setMyDescription("")
      handleFalseAddNote()
      console.log("published",publishedAt)
    }
  }

  return (
    <div className="add_note">
      <div className="remove" onClick={handleFalseAddNote}>
        <IoMdRemoveCircleOutline size={30}/>
      </div>
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
