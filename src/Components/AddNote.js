import React from 'react'
import './addNote.scss'

export default function AddNote() {
    
  return (
    <div className="add_note">
        <form action="">
            <input type="text" placeholder="Note's ID" />
            <input type="text" placeholder="Note's title"/>
            <input type="text" placeholder="Note's Category name"/>
            <textarea placeholder="Note's description" rows="10"></textarea>
            <input type="text" placeholder="Note's Category ID"/>
            <div className="btn">
            <button>Add Note</button>
            </div>
        </form>
    </div>
  )
}
