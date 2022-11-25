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
    this.parent === null ? note.classList.add("note") : note.classList.add("child-note");
    note.innerHTML = this.text;
    // add editable area
    this.addTextArea(note);
    // add buttons
    if (this.parent === null) this.addChildNoteButton(note);
    this.addDeleteNoteButton(note);
    // append note element to notes
    noteDOM.notes.appendChild(note);
  }

  // add editable area to note
  addTextArea(note) {
    const textArea = document.createElement("div");
    textArea.classList.add("note-text-area");
    textArea.toggleAttribute("contenteditable");
    note.appendChild(textArea);
  }  

  // add child note button to note
  addChildNoteButton(note) {
    const addChildNote = document.createElement("button");
    addChildNote.classList.add("add-child-note-button");
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

  // add delete note button to note
  addDeleteNoteButton(note) {
    const deleteNote = document.createElement("button");
    deleteNote.classList.add("delete-note-button");
    this.deleteNoteEvent(deleteNote);
    deleteNote.innerHTML = "x";
    note.appendChild(deleteNote);
  }

  // event to delete note
  deleteNoteEvent(deleteNote) {
    const deleteNoteEvent = fromEvent(deleteNote, "click");
    deleteNoteEvent.subscribe(() => {
      this.delete();
    });
  }

  // delete note element and children elements
  delete() {
    this.element.remove();
    this.children.forEach(child => {
      child.delete(child.parent);
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
