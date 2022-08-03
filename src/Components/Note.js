import React from "react";
import Sidebar from "./Sidebar";
import "./notebook.scss";
import { Container } from "react-bootstrap";

export default function Note({titles, handleChange, handleSubmit, searchQuery}) {
  return (
    <div className="my_notes">
      <div className=".notebook">
      <Sidebar titles={titles} handleSubmit={handleSubmit} searchQuery={searchQuery} handleChange={handleChange} />
        <Container className="notebook_notes" fluid>Note 1</Container>
      </div>
    </div>
  );
}
