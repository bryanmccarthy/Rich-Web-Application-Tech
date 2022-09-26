const note = {
	noteText: document.querySelector('#note-input'),
	color: document.querySelector('#color-selector'),
}

const form = {
	saveBtn: document.querySelector('#save-button')
}

const notes = document.querySelector('.notes-container');

function addNote() {
	let text = note.noteText.value;
	let noteBody = document.createElement('div');

	noteBody.classList.add('note');
  noteBody.classList.add(note.color.value);
  noteBody.innerHTML = `<div class='note'>${text}</div>`;

  notes.appendChild(noteBody);
  note.noteText.value = '';
  note.noteText.focus();
}

if(form.saveBtn) {
	form.saveBtn.addEventListener('click', e => {
	  e.preventDefault();  
	  if (note.noteText.value != '') {
	    addNote();
	  }
	})
}