import "./Notes.css";
import { useState } from "react";
import Note from "./Note";

type Note = {
  id: number;
  title: string;
  body: string;
};

function Notes() {

  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = () => {
    const newNote = {
      id: notes.length + 1,
      title: "",
      body: "",
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="Notes">
      <h1>Notes</h1>
      <button className="Add-note" onClick={addNote}>+</button>
      <div className="Notes-list">
        {
          notes.map(note => (
            <div key={note.id}>
              <Note title={note.title} body={note.body} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Notes;