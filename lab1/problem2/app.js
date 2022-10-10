 const note = {
	noteText: document.querySelector('#note-input'),
	color: document.querySelector('#color-selector'),
}

const form = {
	addBtn: document.querySelector('#add-button'),
}

const notes = document.querySelector('.notes-container');
const colors = ['blue', 'orange', 'green', 'pink'];

// Add note element with content and append edit and delete elements
const addNote = () => {
	let text = note.noteText.value;
	let noteBody = document.createElement('div');
  let editColorSelector = document.createElement('select');
  let editBtn = document.createElement('button');
  let deleteBtn = document.createElement('button');

  noteBody.classList.add('note');
  noteBody.classList.add(note.color.value);
  noteBody.innerHTML = `<div class="note">${text}</div>`;

  let colorOrder = getColorOrder(note.color.value); // Get the three colors not used
  editColorSelector.classList.add('edit-color-selector')
  editColorSelector.innerHTML = `<option value="${note.color.value}" selected>${note.color.value}</option><option value="${colorOrder[0]}">${colorOrder[0]}</option><option value="${colorOrder[1]}">${colorOrder[1]}</option><option value="${colorOrder[2]}">${colorOrder[2]}</option>`

  editBtn.classList.add('edit-note');
  editBtn.innerHTML = 'edit';

  deleteBtn.classList.add('delete-note');
  deleteBtn.innerHTML = 'delete';

  noteBody.appendChild(editColorSelector);
  noteBody.appendChild(editBtn)
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

// Remove any existing color from classList and add the new color
const changeNoteColor = (e, color) => {
  let note = e.target.parentNode;
  note.classList.remove('blue', 'orange', 'green', 'pink') // Remove existing color from classList
  note.classList.add(color);
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
  let note = e.target.parentNode;
  note.toggleAttribute('contenteditable');

  let editBtnText = e.target;
  if (editBtnText.innerHTML === "edit") {
    editBtnText.innerHTML = "save";
  } else {
    editBtnText.innerHTML = "edit";
  }
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

// Only create the addEventListener if the addBtn exists
if(form.addBtn) {
	form.addBtn.addEventListener('click', e => {
	  e.preventDefault();  
	   addNote();
	})
}

// Get the colors that are not the current notes color
const getColorOrder = (currentColor) => {
  let colorOrder = []
  for (let colorIdx in colors) {
    if (colors[colorIdx] != currentColor) {
      colorOrder.push(colors[colorIdx])
    }
  }
  return colorOrder;
}