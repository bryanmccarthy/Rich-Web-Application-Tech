
class Note {
  constructor(text) {
    this.text = text;
    this.parent = null;
    this.children = [];
  }

  addNote() {
    console.log("note: ", this);
  }
}

const note = new Note("note");
note.addNote();
