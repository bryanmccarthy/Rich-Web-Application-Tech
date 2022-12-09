import "./Notes.css";
import Note from "./Note";

type NoteType = {
  id: number,
  title: string,
  body: string
}

function Notes({ notes, handleDelete }: { notes: NoteType[], handleDelete: (params: any) => any }) {

  return (
    <div className="Notes">
      {
        notes.map(note => (
          <div key={note.id}>
            <Note id={note.id} title={note.title} body={note.body} handleDelete={handleDelete} />
          </div>
        ))
      }
    </div>
  );
}

export default Notes;