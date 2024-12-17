import React from "react";
import { MdDelete } from "react-icons/md"; // Import the delete icon

const Notescard = ({ note, deleteNote }) => {
  return (
    <div
      className="card mt-3 bg-secondary bg-gradient text-white"
      style={{ width: "18rem", height: "min-content" }}
    >
      <div className="card-body">
        <p className="card-text">{note.note || "No content available"}</p>
        <button
          className="btn btn-danger"
          onClick={() => deleteNote(note.id)}
          title="Delete Note"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <MdDelete size={20} style={{ color: "white" }} />
        </button>
      </div>
    </div>
  );
};

export default Notescard;
