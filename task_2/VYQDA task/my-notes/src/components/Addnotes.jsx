import React, { useState } from "react";
import axios from "axios";

const Addnotes = ({ addNote }) => {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!note.trim()) {
      console.log("Note cannot be empty");
      return;
    }

    const newNote = { note };

    axios
      .post("/user/addnotes", newNote)

      .then((res) => {
        if (res.data && res.data.data) {
          console.log("Note added successfully:", res.data.data);
          addNote(res.data.data); // Pass the note object to the parent
          setNote(""); // Clear the input field
        } else {
          console.error("Unexpected response from server:", res.data);
        }
      })
      .catch((err) => {
        console.error("Error adding note:", err);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                style={{ height: "50px" }}
                aria-label="Enter a note"
              />
              <button
                type="submit"
                className="btn btn-outline-secondary"
                style={{ height: "50px" }}
              >
                Add Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addnotes;
