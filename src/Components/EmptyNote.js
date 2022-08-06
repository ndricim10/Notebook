import React from "react";
import "./notebook.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AddNote from "./AddNote";

export default function EmptyNote({
  notes,
  handleTrueAddNote,
  handleFalseAddNote,
  AddNoteState,
}) {
  return (
    <div className="empty">
      {AddNoteState && (
        <div className="add-note">
          <AddNote
            notes={notes}
            handleFalseAddNote={handleFalseAddNote}
            handleTrueAddNote={handleTrueAddNote}
          />
          <div className="space-form"></div>
        </div>
      )}
      <h3>Your notebook is empty. Please add a note</h3>
      <div className="addNote" onClick={handleTrueAddNote}>
        <AiOutlinePlusCircle size={100} />
      </div>
    </div>
  );
}
