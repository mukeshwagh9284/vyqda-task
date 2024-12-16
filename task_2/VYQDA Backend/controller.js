// const userNotes = require("./module");
// const mongoose = require("mongoose");
// const addNotes = async (req, res) => {
//   try {
//     const { note } = req.body;
//     const notesData = new userNotes({
//       note,
//     });
//     const data = await notesData.save();
//     res.status(200).send({ msg: "Data inserted successfully", data });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// };

// const deleteNote = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Validate ObjectId
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).send({ msg: "Invalid ID format" });
//     }

//     // Delete note
//     const result = await userNotes.findByIdAndDelete(id);

//     if (!result) {
//       return res.status(404).send({ msg: "Note not found" });
//     }

//     res.status(200).send({ msg: "Note deleted successfully", result });
//   } catch (err) {
//     res.status(500).send({ msg: "An error occurred", error: err.message });
//   }
// };
// const getNotes = async (req, res) => {
//   try {
//     // Fetch notes
//     const notes = await userNotes.find();

//     if (!notes.length) {
//       return res.status(404).send({ msg: "No notes found" });
//     }

//     res.status(200).send({ msg: "Notes fetched successfully", data: notes });
//   } catch (err) {
//     res.status(500).send({
//       msg: "An error occurred while fetching the notes",
//       error: err.message,
//     });
//   }
// };
// module.exports = { addNotes, deleteNote, getNotes };

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
