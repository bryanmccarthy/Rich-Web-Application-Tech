const note = {
	noteText: document.querySelector('#note-input'),
	color: document.querySelector('#color-selector'),
}

const form = {
	addBtn: document.querySelector('#add-button'),
}

const notes = document.querySelector('.notes-container');

function addNote() {
	let text = note.noteText.value;
	let noteBody = document.createElement('div');
  let editBtn = document.createElement('button');
  let deleteBtn = document.createElement('button');

	noteBody.classList.add('note');
  noteBody.classList.add(note.color.value);
  noteBody.innerHTML = `<div class="note">${text}</div>`;

  editBtn.classList.add('edit-note');
  editBtn.innerHTML = 'edit';

  deleteBtn.classList.add('delete-note');
  deleteBtn.innerHTML = 'delete';

  noteBody.appendChild(editBtn)
  noteBody.appendChild(deleteBtn);
  notes.appendChild(noteBody);

  note.noteText.value = '';
  note.noteText.focus();

  editButtonListener(editBtn);
  deleteButtonListener(deleteBtn);
}

function editButtonListener(editBtn) {
  editBtn.addEventListener('click', e => {
    e.stopPropagation();
    editNote(e);
  });
}

function editNote(e) {
  let note = e.target.parentNode;
  note.toggleAttribute('contenteditable');
  let editBtnText = e.target;
  if (editBtnText.innerHTML === "edit") {
    editBtnText.innerHTML = "save";
  } else {
    editBtnText.innerHTML = "edit";
  }
}

function deleteButtonListener(deleteBtn) {
  deleteBtn.addEventListener('click', e => {
    e.stopPropagation();
    deleteNote(e);
  });
}

function deleteNote(e) {
  let note = e.target.parentNode;
  note.parentNode.removeChild(note);
}

if(form.addBtn) {
	form.addBtn.addEventListener('click', e => {
	  e.preventDefault();  
	   addNote();
	})
}