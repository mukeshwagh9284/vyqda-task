import React, { useState, useEffect } from "react";
import axios from "axios";
import Notescard from "./Notescard";
import Addnotes from "./Addnotes";

const Listnotes = () => {
  const [userNotes, setNotes] = useState([]);

  // Fetch notes when the component mounts
  useEffect(() => {
    axios
      .get("/user/getnote")
      .then((res) => {
        console.log("Fetched Notes:", res.data);
        setNotes(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching notes:", err);
      });
  }, []);

  // Delete note by ID
  const deleteNote = (id) => {
    axios
      .delete(`/user/deletenotes/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id)); // Use note.id
        } else {
          console.error("Failed to delete note:", res.data);
        }
      })
      .catch((err) => {
        console.error("Error deleting note:", err);
      });
  };

  // Add a new note
  const addNote = (newNote) => {
    console.log("Adding note:", newNote);
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      console.log("Updated Notes:", updatedNotes);
      return updatedNotes;
    });
  };

  return (
    <div>
      <Addnotes addNote={addNote} />
      <div className="d-flex flex-wrap justify-content-around">
        {userNotes.length > 0 ? (
          userNotes.map((note) => (
            <Notescard key={note.id} note={note} deleteNote={deleteNote} />
          ))
        ) : (
          <p>No notes available. Add some notes to get started!</p>
        )}
      </div>
    </div>
  );
};

export default Listnotes;
