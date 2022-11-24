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
    console.log(this);
  }

  addChildNote(note) {
    this.children.push(note);
    note.parent = this;
    console.log(this);
  }
}

// TEST
const note = new Note("note");

const addChildNote = fromEvent(addNoteButton, 'click');
addChildNote.subscribe(() => {
  const childNote = new Note("child note");
  note.addChildNote(childNote);
});
