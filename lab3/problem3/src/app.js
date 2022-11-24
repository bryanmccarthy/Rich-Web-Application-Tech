import { fromEvent } from "rxjs";

const addNoteButton = document.querySelector("add-note");

class Note {
  constructor(text) {
    this.text = text;
    this.parent = null;
    this.children = [];
  }

  addNote() {
    console.log("note: ", this);
  }

  addChildNote(note) {
    this.children.push(note);
    note.parent = this;
    console.log(this);
  }
}

const note = new Note("note");
note.addNote();

const addNote = fromEvent(addNoteButton, 'click');
addNote.subscribe(() => {
  const childNote = new Note("child note");
  note.addChildNote(childNote);
});