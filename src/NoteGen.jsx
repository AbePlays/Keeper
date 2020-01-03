import React from "react";
import Note from "./Note";
import NotesData from "./notes";

function notesGenerate(note) {
  return <Note key={note.key} title={note.title} body={note.content} />;
}

function NoteGen() {
  return <div>{NotesData.map(notesGenerate)}</div>;
}

export default NoteGen;
