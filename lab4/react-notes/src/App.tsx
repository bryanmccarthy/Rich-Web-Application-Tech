import './App.css';
import Notes from './components/Notes';
import { useState } from "react";

type NoteType = {
  id: number,
  title: string,
  body: string
}

function App() {

  const [notes, setNotes] = useState<NoteType[]>([]);

  const addNote = () => {
    const newNote = {
      id: notes.length + 1,
      title: "",
      body: "",
    };
    setNotes([...notes, newNote]);
  };

  const handleDelete = (id: number) => {
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes);
  }

  return (
    <div className="App">
      <button className="Add-note" onClick={addNote}>+</button>
      <Notes notes={notes} handleDelete={handleDelete}/>
    </div>
  )
}

export default App;
