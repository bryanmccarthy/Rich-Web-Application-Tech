import "./Note.css";

function Note({ title, body }: { title: string, body: string }) {
  return (
    <div className="Note">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Note;