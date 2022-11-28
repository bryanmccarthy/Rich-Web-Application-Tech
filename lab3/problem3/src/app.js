import { fromEvent } from "rxjs";

const noteDOM = {
  notes: document.querySelector(".notes"),
  addNoteButton: document.querySelector(".add-note-button"),
};

const colorThemes = {
  green: ['#7a9177', '#dbf2d8'],
  blue: ['#203275', '#8fa1e3'],
  red: ['#852938', '#e38d9b'],
}

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
    this.addColorSelector(note);
    // append note element to notes
    noteDOM.notes.appendChild(note);
  }

  // add editable area to note
  addTextArea(note) {
    const textArea = document.createElement("div");
    this.parent === null ? textArea.classList.add("note-text-area") : textArea.classList.add("child-note-text-area");
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

  // add color selector to note
  addColorSelector(note) {
    const colorSelector = document.createElement("select");
    colorSelector.classList.add("color-selector");
    this.colorSelectorEvent(colorSelector);
    const colors = ["green", "blue", "red"];
    colors.forEach((color) => {
      const option = document.createElement("option");
      option.value = color;
      option.innerHTML = color;
      colorSelector.appendChild(option);
    });
    note.appendChild(colorSelector);
  }

  // event to change note color
  colorSelectorEvent(colorSelector) {
    const colorSelectorEvent = fromEvent(colorSelector, "change");
    colorSelectorEvent.subscribe((e) => {
      this.changeColor(e);
    });
  }

  // change note color
  changeColor(e) {
    this.parent === null ? this.element.style.backgroundColor = colorThemes[e.target.value][0] : this.element.style.backgroundColor = colorThemes[e.target.value][1];
    this.children.forEach(child => {
      child.changeColor(e);
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
      child.delete(child);
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
