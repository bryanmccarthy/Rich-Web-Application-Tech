/*
  Sources:
  https://www.w3schools.blog/spaces-letters-alphabets-validation-javascript-js
  https://www.w3schools.com/jsref/jsref_regexp_0-9.asp
  https://www.w3resource.com/javascript/form/email-validation.php
  https://www.tutorialspoint.com/how-to-sort-an-html-table-using-javascript
*/

const form = {
  form: document.querySelector('#form'),
  addContact: document.querySelector('#add-contact'),
  name: document.querySelector('#name'),
  mobile: document.querySelector('#mobile'),
  email: document.querySelector('#email'),
  error: document.querySelector('#error'),
  search: document.querySelector('#search')
}

const table = {
  table: document.querySelector("#table"),
  nameTh: document.querySelector('#name-th'),
  noResult: document.querySelector('#no-result'),
  ascending: false
}

// Add Contact
const addContact = () => {
  const validContact = validateContact();

  if (validContact) {
    toggleError(valid=true);
    addContactToTable();
    resetForm();
  } else {
    toggleError(valid=false);
  }
}

// Insert contact entries
const addContactToTable = () => {
  const newContact = table.table.insertRow(table.table.rows.length);
  const newContactName = newContact.insertCell(0);
  const newContactMobile = newContact.insertCell(1);
  const newContactEmail = newContact.insertCell(2);

  newContactName.innerHTML = form.name.value;
  newContactMobile.innerHTML = form.mobile.value;
  newContactEmail.innerHTML = form.email.value;
}

// Validate contact entries
const validateContact = () => {
  const validName = validateName(form.name.value);
  const validMobile = validateMobile(form.mobile.value);
  const validEmail = validateEmail(form.email.value);

  return(validName && validMobile && validEmail);
}

const validateName = (name) => {
  return name.match(/^[a-zA-Z\s]*$/);
}

const validateMobile = (mobile) => {
  return mobile.match(/[0-9]/) && mobile.length == 10;
}

const validateEmail = (email) => {
  return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
}

const resetForm = () => {
  document.getElementById("form").reset();
}

const toggleError = (valid) => {
  let formError = form.error;
  formError.style.visibility = valid === true ? 'hidden' : 'visible';
}

// Filter table by number
const searchFilter = () => {
  const rows = table.table.rows;
  let row = 0;
  let rowsVisible = rows.length-1;
  let filter = form.search.value;

  while (row < rows.length) {
    let currRow = rows[row].getElementsByTagName("td")[1]; // Mobile number element
    if (currRow) {
      mobileNumber = currRow.textContent || currRow.innerText;
      if (mobileNumber.indexOf(filter) > -1) {
       rows[row].style.display = "";
       rowsVisible++;
      } else {
        rows[row].style.display = "none";
        rowsVisible--;
      }
    }
    table.noResult.style.visibility = rowsVisible !== 0 ? 'hidden' : 'visible'; // No-result div visibility
    row++;
  }
}

// Sort the table
const sortTable = () => {
  let sorting = true;

  while (sorting) {
    let rows = table.table.rows;
    row = 1; // first td row
    if (rows.length < 3) break;

    while (row < rows.length - 1) {
      sorting = false;
      const currRow = rows[row].getElementsByTagName("td")[0];
      const nextRow = rows[row + 1].getElementsByTagName("td")[0];

      sorting = shouldWeSort(table.ascending, currRow, nextRow)
      if (sorting) {
        rows[row].parentNode.insertBefore(rows[row + 1], rows[row]);
        break;
      }
      row++;
    }
  }
  table.ascending = table.ascending ? false : true;
}

const shouldWeSort = (ascending, currRow, nextRow) => {
  currRow = currRow.innerHTML.toLowerCase();
  nextRow = nextRow.innerHTML.toLowerCase();

  return !ascending && currRow > nextRow || ascending && currRow < nextRow;
}

// Event listener for add contact button
form.addContact.addEventListener('click', e => {
  e.preventDefault();  
    addContact();
})

// Event listener for name in table head
table.nameTh.addEventListener('click', e => {
  e.preventDefault();
    sortTable();
})