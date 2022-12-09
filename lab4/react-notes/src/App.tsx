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

  return (
    <div className="App">
      <h1>Notes</h1>
      <button className="Add-note" onClick={addNote}>+</button>
      <Notes notes={notes}/>
    </div>
  )
}

export default App;
