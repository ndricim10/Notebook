import React from "react";
import Sidebar from "./Sidebar";
import "./notebook.scss";

export default function Note({
  titles,
  handleChange,
  handleSubmit,
  searchQuery,
  notes
}) {
  return (
    <>
      <div className="notebook">
        <Sidebar
          titles={titles}
          handleSubmit={handleSubmit}
          searchQuery={searchQuery}
          handleChange={handleChange}
        />
        <div className="my_note">Note 1</div>
      </div>
    </>
  );
}
