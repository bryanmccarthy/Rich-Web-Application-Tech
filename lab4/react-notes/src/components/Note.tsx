import "./Note.css";

function Note({ title, body }: { title: string, body: string }) {
  return (
    <div className="Note">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Note;