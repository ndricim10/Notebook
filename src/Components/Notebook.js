import "./notebook.scss";
import request from "../api";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getNotes } from "../Redux/Actions/allData";

export default function Notebook() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getNotes())
    console.log('clicked')
  }, [dispatch])

  const notes = [
    "Note100",
    "Note1",
    "Note1",
    "Note1",
    "Note1",
    "Note1",
    "Note1",
    "Note1",
    "Note1",
    "Note1",
    "Notes",
    "Notes",
    "Notes",
    "Notes",
    "Notes",
    "Notes",
    "Notes",
    "Notes",
    "Notes",
    "Notes",
    "Notes",
    "Notes",
    "Notes",
    "Notes",
    "Notes",
  ];
  const allNotes = notes.map((note, i) => (
    <span className="note_title" key={i}>
      {note}
    </span>
  ));

  return (
    <>
      <div className="notebook">
        <div className="notebook_sidebar">
          <div className="notebook_sidebar_searchBar">
            <form action="">
              <input type="search" placeholder="Search for a note" />
              <button>Search</button>
            </form>
            <h3>All Notes</h3>
          </div>
          <div className="notebook_sidebar_fixed">{allNotes}</div>
        </div>
        <div className="notebook_notes">{allNotes}</div>
      </div>
    </>
  );
}
