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
    const addChildNote = document.createElement("button");

    note.classList.add("note");
    note.appendChild(addChildNote);
    notes.appendChild(note);

    const addChildNoteEvent = fromEvent(addChildNote, "click")
    addChildNoteEvent.subscribe(() => {
      const childNote = new Note();
      this.addChildNote(childNote);
    });
  }

  addChildNote(note) {
    this.children.push(note);
    note.parent = this;
  }
}

const addNote = fromEvent(addNoteButton, 'click');
addNote.subscribe(() => {
  const note = new Note("note");
  note.addNote();
});
