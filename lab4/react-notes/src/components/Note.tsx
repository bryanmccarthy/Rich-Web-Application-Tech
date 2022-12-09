import "./Note.css";

function Note({ id, title, body, handleDelete }: { id: number, title: string, body: string, handleDelete: (params: any) => any }) {
  return (
    <div className="Note">
      <h3>{title}</h3>
      <p>{body}</p>
      <button className="Delete-note" onClick={() => handleDelete(id)}>X</button>
    </div>
  );
}

export default Note;