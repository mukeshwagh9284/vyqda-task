const db = require("./db");

// Add a note
const addNotes = (req, res) => {
  const { note } = req.body;

  if (!note) {
    return res.status(400).send({ msg: "Note content cannot be empty" });
  }

  const query = "INSERT INTO notes (content) VALUES (?)";
  db.query(query, [note], (err, result) => {
    if (err) {
      return res
        .status(500)
        .send({ msg: "Error inserting note", error: err.message });
    }

    res.status(200).send({
      msg: "Note added successfully",
      data: { id: result.insertId, note },
    });
  });
};

// Delete a note
const deleteNote = (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM notes WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      return res
        .status(500)
        .send({ msg: "Error deleting note", error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).send({ msg: "Note not found" });
    }

    res.status(200).send({ msg: "Note deleted successfully" });
  });
};

// Get all notes
const getNotes = (req, res) => {
  const query = "SELECT * FROM notes";

  db.query(query, (err, results) => {
    if (err) {
      return res
        .status(500)
        .send({ msg: "Error fetching notes", error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).send({ msg: "No notes found" });
    }

    res.status(200).send({ msg: "Notes fetched successfully", data: results });
  });
};

module.exports = { addNotes, deleteNote, getNotes };
