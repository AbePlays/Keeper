import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NotesData from "./notes";

function genNotes(note) {
  return <Note key={NotesData.key} title={note.title} body={note.content} />;
}

function App() {
  return (
    <div>
      <Heading />
      {NotesData.map(genNotes)}
      <Footer />
    </div>
  );
}

export default App;
