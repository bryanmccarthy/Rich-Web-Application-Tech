
class Note {
  constructor(text) {
    this.text = text;
    this.parent = null;
    this.children = [];
  }
}

const note = new Note("note");
console.log(note);
