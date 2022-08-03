import "./notebook.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getNotes } from "../Redux/Actions/allData";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

export default function Notebook({
  titles,
  handleChange,
  handleSubmit,
  searchQuery,
  categories,
  cards,
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
        <div className="right-section">
          <div className="notebook_categories">{categories}</div>
          <div className="notebook_notes">{cards}</div>
        </div>
      </div>
    </>
  );
}
