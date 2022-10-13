const form = {
  addContact: document.querySelector('#add-contact'),
  name: document.querySelector('#name'),
  mobile: document.querySelector('#mobile'),
  email: document.querySelector('#email')
}

const tableItems = {
  table: document.querySelector(".table"),
  nameTh: document.querySelector('#name-th'),
  ascending: false
}

// Add contact submitted
// Validation
const addContactSubmit = () => {
  const validName = validateName();
  const validMobile = validateMobile();
  const validEmail = validateEmail();

  if (validName && validMobile && validEmail) {
    console.log("Valid");
    addContactToTable();
    document.getElementById("form").reset(); // Clear form entry
  } else {
    console.log("Invalid");
  }
}

const addContactToTable = () => {
  console.log(form.name.value);
  console.log(form.mobile.value);
  console.log(form.email.value);
}

// Event listener for add contact button
if(form.addContact) {
  form.addContact.addEventListener('click', e => {
    e.preventDefault();  
      addContactSubmit();
  })
}

// Sort the table
const sortTable = () => {
  console.log("sorting table...");

  let sorting = true;
  let shouldSort;

  while (sorting) {
    sorting = false;

    let rows = tableItems.table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSort = false;

      currRow = rows[i].getElementsByTagName("td")[0];
      nextRow = rows[i + 1].getElementsByTagName("td")[0];

      // If table is not ascending, sort it in ascending order, else sort it descending
      if (!tableItems.ascending) {
        if (currRow.innerHTML.toLowerCase() > nextRow.innerHTML.toLowerCase()) {
          shouldSort = true;
          break;
        }
      } else {
        if (currRow.innerHTML.toLowerCase() < nextRow.innerHTML.toLowerCase()) {
          shouldSort = true;
          break;
        }
      }
    }
    if (shouldSort) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      sorting = true;
    }
  }
  // Toggle ascending state 
  if (tableItems.ascending) {
    tableItems.ascending = false;
  } else {
    tableItems.ascending = true;
  }
}

// Event listener for name in table head
if(tableItems.nameTh) {
  tableItems.nameTh.addEventListener('click', e => {
    e.preventDefault();
      sortTable();
  })
}

const validateName = () => {
  console.log("validating name");
  name = form.name.value;
  return name.match(
      /^[a-zA-Z\s]*$/
    );
}

const validateMobile = () => {
  console.log("validating mobile");
  mobile = form.mobile.value;
  return mobile.match(
      /^\d+/
    );
}

const validateEmail = () => {
  console.log("validating email");
  email = form.email.value;
  return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
