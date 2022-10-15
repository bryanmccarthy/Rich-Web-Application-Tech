const note = {
	noteText: document.querySelector('#note-input'),
	color: document.querySelector('#color-selector'),
}

const form = {
	addBtn: document.querySelector('#add-button'),
}

const notes = document.querySelector('.notes-container');

// Add note element with content and append edit and delete elements
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

  editColorSelectorListener(editColorSelector);
  editButtonListener(editBtn);
  deleteButtonListener(deleteBtn);
}

// Selector listener for the select element on each note
const editColorSelectorListener = (editColorSelector) => {
  editColorSelector.addEventListener('change', e => {
    e.stopPropagation();
    changeNoteColor(e, editColorSelector.value);
  });
}

// Edit button listener for editBtn that is appended to each note
const editButtonListener = (editBtn) => {
  editBtn.addEventListener('click', e => {
    e.stopPropagation();
    editNote(e);
  });
}

// Edit note button toggles the note element to be editable
const editNote = (e) => {
  const note = e.target.parentNode;
  note.toggleAttribute('contenteditable');
  const editBtnText = e.target.innerHTML === "edit" ? e.target.innerHTML = "save" : e.target.innerHTML = "edit";
}

// Delete button listener for deleteBtn that is appended to each note
const deleteButtonListener = (deleteBtn) => {
  deleteBtn.addEventListener('click', e => {
    e.stopPropagation();
    deleteNote(e);
  });
}

// Removes the note (child of notes parent)
const deleteNote = (e) => {
  let note = e.target.parentNode;
  note.parentNode.removeChild(note);
}

// Add button listener 
form.addBtn.addEventListener('click', e => {
  e.preventDefault();  
  addNote();
})

// Remove any existing color from classList and add the new color
const changeNoteColor = (e, color) => {
  let note = e.target.parentNode;
  note.classList.remove('blue', 'orange', 'green', 'pink'); // Remove any existing color from classList
  note.classList.add(color);
}

// Get the colors that are not the current notes color
const getOtherColors = (currentColor) => {
  const colors = ['blue', 'orange', 'green', 'pink'];
  return otherColors = colors.filter(color => color != currentColor);
}