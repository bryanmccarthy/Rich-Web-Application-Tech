import { fromEvent } from 'rxjs';

const note = {
	noteText: document.querySelector('#note-input'),
	color: document.querySelector('#color-selector'),
}

const form = {
	addNoteBtn: document.querySelector('#add-note'),
}

const notes = document.querySelector('.notes-container');

const addNote = () => {
  const noteText = note.noteText.value;
  console.log(noteText);
}

const addNoteButton = fromEvent(form.addNoteBtn, 'click');
addNoteButton.subscribe(() => addNote());