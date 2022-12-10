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
  const [latestId, setLatestId] = useState<number>(0);

  const addNote = () => {
    const newNote = {
      id: latestId + 1,
      title: "",
      body: "",
    };
    setNotes([...notes, newNote]);
    setLatestId(latestId + 1);
  };

  const handleDelete = (id: number) => {
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes);
  }

  return (
    <div className="App">
      <button className="Add-note" onClick={addNote}>+ Note</button>
      <Notes notes={notes} handleDelete={handleDelete}/>
    </div>
  )
}

export default App;
