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
  const text = note.noteText.value;
  const noteBody = document.createElement('div');
  const editColorSelector = document.createElement('select');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  const otherColors = getOtherColors(note.color.value); // Get the three colors not used

  noteBody.classList.add('note');
  noteBody.classList.add(note.color.value);
  noteBody.innerHTML = `<div class="note">${text}</div>`;
  editColorSelector.classList.add('edit-color-selector');

  // Add a color selector to each note with correct color ordering
  editColorSelector.innerHTML = `<option value="${note.color.value}" selected>${note.color.value}</option><option value="${otherColors[0]}">${otherColors[0]}</option><option value="${otherColors[1]}">${otherColors[1]}</option><option value="${otherColors[2]}">${otherColors[2]}</option>`;
  editBtn.classList.add('edit-note');
  editBtn.innerHTML = 'edit';
  deleteBtn.classList.add('delete-note');
  deleteBtn.innerHTML = 'delete';

  noteBody.appendChild(editColorSelector);
  noteBody.appendChild(editBtn);
  noteBody.appendChild(deleteBtn);
  notes.appendChild(noteBody);
  note.noteText.value = '';
  note.noteText.focus();
  
  const deleteNoteButton = fromEvent(deleteBtn, 'click');
  deleteNoteButton.subscribe(() => deleteNote());
}

const deleteNote = () => {
  console.log("delete note");
}

const addNoteButton = fromEvent(form.addNoteBtn, 'click');
addNoteButton.subscribe(() => addNote());

// Get the colors that are not the current notes color
const getOtherColors = (currentColor) => {
  const colors = ['blue', 'orange', 'green', 'pink'];
  return colors.filter(color => color != currentColor);
}