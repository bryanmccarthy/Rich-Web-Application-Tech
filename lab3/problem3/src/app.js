import { Observable, fromEvent } from "rxjs";

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

  render() {
    const note = document.createElement("div");
    this.element = note;
    note.classList.add("note");
    note.innerHTML = this.text;
    noteDOM.notes.appendChild(note);
  }

  delete() {
    noteDOM.notes.removeChild(this.element);
    this.children.forEach(child => {
      console.log("delete child", child);
      child.delete();
    });
  }

  addChild(note) {
    note.parent = this;
    this.children.push(note);
  }
}

// Event to create a new note
const addNoteEvent = fromEvent(noteDOM.addNoteButton, "click");
addNoteEvent.subscribe(() => {
  const note = new Note("");
  note.render();
});
