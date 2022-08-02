import "./notebook.scss";

export default function Notebook() {

    const notes = ['Note1','Note1','Note1','Note1','Note1','Note1','Note1','Note1','Note1','Note1','Notes','Notes','Notes','Notes','Notes','Notes','Notes','Notes','Notes','Notes','Notes','Notes','Notes','Notes','Notes' ]
    const allNotes = notes.map((note, i)=> <h1 key={i}>{note}</h1>)

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
          <div className="notebook_sidebar_fixed">
            {allNotes}
          </div>
        </div>
        <div className="notebook_notes">
          
        </div>
      </div>
    </>
  );
}
