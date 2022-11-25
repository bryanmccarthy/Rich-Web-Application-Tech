// import { Observable, fromEvent } from "rxjs";

const notes = document.querySelector(".notes-container");

class Note {
  constructor(text) {
    this.text = text;
    this.parent = null;
    this.children = [];
  }

  render() {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = this.text;
    notes.appendChild(note);
  }

  addChild(note) {
    note.parent = this;
    this.children.push(note);
  }
}

const note = new Note("new note");
note.render();
