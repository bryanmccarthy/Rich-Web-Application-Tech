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
    const deleteNote = document.createElement("button");
    const addChildNote = document.createElement("button");

    note.classList.add("note");
    note.appendChild(deleteNote);
    note.appendChild(addChildNote);
    notes.appendChild(note);

    const deleteNoteEvent = fromEvent(deleteNote, "click");
    deleteNoteEvent.subscribe(() => {
      this.deleteNote(note);
    });

    const addChildNoteEvent = fromEvent(addChildNote, "click")
    addChildNoteEvent.subscribe(() => {
      const childNote = new Note();
      this.addChildNote(childNote);
    });
  }

  deleteNote() {
    console.log(this);
    this.children.forEach(child => {
      child.deleteNote();
    });
  }

  addChildNote(note) {
    this.children.push(note);
    note.parent = this;

    const noteElement = document.createElement("div");
    noteElement.classList.add("child-note");
    notes.appendChild(noteElement);
  }
}

const addNote = fromEvent(addNoteButton, 'click');
addNote.subscribe(() => {
  const note = new Note("note");
  note.addNote();
});
