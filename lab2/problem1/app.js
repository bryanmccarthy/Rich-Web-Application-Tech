const form = {
  addContact: document.querySelector('#add-contact'),
  name: document.querySelector('#name'),
  mobile: document.querySelector('#mobile'),
  email: document.querySelector('#email')
}

const table = {
  nameTh: document.querySelector('#name-th')
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

// Event listener for name in table head
if(table.nameTh) {
  table.nameTh.addEventListener('click', e => {
    e.preventDefault();
      console.log("Name TH pressed");
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
