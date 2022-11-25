// import { Observable, fromEvent } from "rxjs";

const notes = document.querySelector(".notes-container");

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
    notes.appendChild(note);
  }

  delete() {
    notes.removeChild(this.element);
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

const note = new Note("new note");
note.render();

const childNote = new Note("child note");
note.addChild(childNote);
childNote.render();

note.delete();
