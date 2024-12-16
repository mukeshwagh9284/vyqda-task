const { addNotes, deleteNote, getNotes } = require("./controller");
const express = require("express");
const router = express.Router();
router.post("/addnotes", addNotes);
router.delete("/deletenotes/:id", deleteNote);
router.get("/getnote", getNotes);
module.exports = router;
