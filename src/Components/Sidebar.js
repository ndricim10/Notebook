import React from "react";
import "./notebook.scss";
import { AiFillHome } from "react-icons/ai";

export default function Sidebar({
  titles,
  handleSubmit,
  searchQuery,
  handleChange,
}) {
  return (
    <>
      <div className="notebook_sidebar">
        <div className="flex-column">
          <div className="notebook_sidebar_searchBar">
            <AiFillHome />
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                value={searchQuery}
                placeholder="Search for a note"
                onChange={handleChange}
              />
              <button>Search</button>
            </form>
          </div>
          <h3>All Notes</h3>
        </div>
        <div className="notebook_sidebar_fixed">{titles}</div>
      </div>
    </>
  );
}
