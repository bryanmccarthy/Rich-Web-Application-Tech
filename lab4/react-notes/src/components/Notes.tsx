import "./Notes.css";
import Note from "./Note";

type NoteType = {
  id: number,
  title: string,
  body: string
}

function Notes({ notes }: { notes: NoteType[] }) {
  return (
    <div className="Notes">
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