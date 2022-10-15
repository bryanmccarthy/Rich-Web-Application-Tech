const form = {
  form: document.querySelector('#form'),
  addContact: document.querySelector('#add-contact'),
  name: document.querySelector('#name'),
  mobile: document.querySelector('#mobile'),
  email: document.querySelector('#email'),
  error: document.querySelector('#error'),
  search: document.querySelector('#search')
}

const tableItems = {
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
  const newContact = tableItems.table.insertRow(tableItems.table.rows.length);
  const newContactName = newContact.insertCell(0);
  const newContactMobile = newContact.insertCell(1);
  const newContactEmail = newContact.insertCell(2);

  newContactName.innerHTML = form.name.value;
  newContactMobile.innerHTML = form.mobile.value;
  newContactEmail.innerHTML = form.email.value;
}

// Validate contact entries
const validateContact = () => {
  const validName = validateName();
  const validMobile = validateMobile();
  const validEmail = validateEmail();

  return(validName && validMobile && validEmail);
}

const validateName = () => {
  return form.name.value.match(/^[a-zA-Z\s]*$/);
}

const validateMobile = () => {
  mobile = form.mobile.value;
  return mobile.match(/^\d+/) && mobile.length == 10;
}

const validateEmail = () => {
  email = form.email.value;
  return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
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
  const rows = tableItems.table.rows;
  let rowsVisible = rows.length-1;
  let filter = form.search.value;

  for (i = 0; i < rows.length; i++) {
    let currRow = rows[i].getElementsByTagName("td")[1]; // Mobile number element
    if (currRow) {
      mobileNumber = currRow.textContent || currRow.innerText;
      if (mobileNumber.indexOf(filter) > -1) {
       rows[i].style.display = "";
       rowsVisible++;
      } else {
        rows[i].style.display = "none";
        rowsVisible--;
      }
    }
    // If number of rows visible is not 0 then don't show noResult div
    tableItems.noResult.style.visibility = rowsVisible !== 0 ? 'hidden' : 'visible';
  }
}

// Sort the table
const sortTable = () => {
  let sorting = true;

  while (sorting) {
    let rows = tableItems.table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      sorting = false;
      const currRow = rows[i].getElementsByTagName("td")[0];
      const nextRow = rows[i + 1].getElementsByTagName("td")[0];

      sorting = shouldWeSort(tableItems.ascending, currRow, nextRow)
      if (sorting) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        break;
      }
    }
  }
  tableItems.ascending = tableItems.ascending ? false : true;
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
tableItems.nameTh.addEventListener('click', e => {
  e.preventDefault();
    sortTable();
})