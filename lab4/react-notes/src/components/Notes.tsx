import "./Notes.css";
import { useState } from "react";

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
      title: "test title",
      body: "test body",
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="Notes">
      <h1>Notes</h1>
      <button onClick={addNote}>Add Note</button>
      {
        notes.map(note => (
          <div key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Notes;