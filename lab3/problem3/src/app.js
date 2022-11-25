import { fromEvent } from "rxjs";

const noteDOM = {
  notes: document.querySelector(".notes"),
  addNoteButton: document.querySelector("#add-note"),
};

class Note {
  constructor(text) {
    this.text = text;
    this.element = null;
    this.parent = null;
    this.children = [];
  }

  // render note to notes div
  render() {
    const note = document.createElement("div");
    this.element = note;
    note.classList.add("note");
    note.innerHTML = this.text;
    // add child note button to top level notes
    if (this.parent === null) {
      this.addChildNoteButton(note);
    }
    // append note element to notes
    noteDOM.notes.appendChild(note);
  }

  // add child note button to note
  addChildNoteButton(note) {
    const addChildNote = document.createElement("button");
    this.createChildNoteEvent(addChildNote);
    addChildNote.innerHTML = "+";
    note.appendChild(addChildNote);
  }
  
  // event to create child note
  createChildNoteEvent(addChildNote) {
    const addChildNoteEvent = fromEvent(addChildNote, "click");
    addChildNoteEvent.subscribe(() => {
      const childNote = new Note("");
      this.addChild(childNote);
      childNote.render();
    });
  }

  // delete note element and children elements
  delete() {
    noteDOM.notes.removeChild(this.element);
    this.children.forEach(child => {
      child.delete();
    });
  }

  // add child note to this note
  addChild(note) {
    note.parent = this;
    this.children.push(note);
  }
}

// event to create a new note
const addNoteEvent = fromEvent(noteDOM.addNoteButton, "click");
addNoteEvent.subscribe(() => {
  const note = new Note("");
  note.render();
});
