const form = {
  addContact: document.querySelector('#add-contact'),
  name: document.querySelector('#name'),
  mobile: document.querySelector('#mobile'),
  email: document.querySelector('#email'),
}

const addContactSubmit = () => {
  console.log("add contact pressed");
  const validEmail = validateEmail();
  if (validEmail) {
    console.log(validEmail);
  } else {
    console.log("Invalid");
  }

  addContactToTable();

  document.getElementById("form").reset();
}

const addContactToTable = () => {
  console.log(form.name.value);
  console.log(form.mobile.value);
  console.log(form.email.value);
}

if(form.addContact) {
  form.addContact.addEventListener('click', e => {
    e.preventDefault();  
      addContactSubmit();
  })
}

const validateEmail = () => {
  console.log("validating email");
  email = form.email.value;
  console.log(email);
  return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
