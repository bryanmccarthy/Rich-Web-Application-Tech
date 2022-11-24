import { fromEvent } from "rxjs";

const addNoteButton = document.querySelector("#add-note");
const notes = document.querySelector(".notes-container");

class Note {
  constructor(text) {
    this.text = text;
    this.parent = null;
    this.children = [];
  }

  addNote() {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = this.text;
    notes.appendChild(note);
  }

  addChildNote(note) {
    this.children.push(note);
    note.parent = this;
    console.log(this);
  }
}

const addNote = fromEvent(addNoteButton, 'click');
addNote.subscribe(() => {
  const note = new Note("note");
  note.addNote();
});
