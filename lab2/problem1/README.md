# Problem 1

Phone Directory is a web application that allows a user to manage contacts.
Once a contact is saved, it appears in a table.
The list can be sorted by name.
The list can be filtered by phone number.

**Functionality:**

It has three fields Name, Mobile and Email. All 3 are required fields. Clicking on
the Add Contact button should add the contact to the table. Before adding a
contact, the following validations should occur:

Name - Should contain only Alphabets and Space. Should be less than or equal
to 20 characters in length.

Mobile - Should contain only Numbers. Should be equal to 10 characters in
length.

Email - Should have a proper validation and should be less than 40 characters in
length.

Show an error div with id 'error' if there is any error in input format or if there is
any empty field.

Valid contacts should get added sequentially in the table.

After adding a valid contact, all fields should be reset to empty.

Clicking on the Name heading in the table should sort it by ascending order of
the contact name. Further clicks should alternately sort descending then
ascending.

The search should begin as soon as an input is typed by the user in the search
field. It should filter rows based on the mobile number given in the search field.

If there is no matching row for the search term, then the div with id 'noResult'
should be made visible. It should be hidden otherwise. Odd numbered data
rows should have #f2f2f2 as the background color

<img width="928" alt="Screenshot 2022-11-05 at 6 00 13 PM" src="https://user-images.githubusercontent.com/29736301/200134554-c5a28dea-369a-41eb-8787-de7160e6d8c9.png">

<img width="929" alt="Screenshot 2022-11-05 at 6 01 19 PM" src="https://user-images.githubusercontent.com/29736301/200134566-dcf1592f-67d6-4209-b670-7fe5013d4474.png">

<img width="929" alt="Screenshot 2022-11-05 at 6 02 06 PM" src="https://user-images.githubusercontent.com/29736301/200134571-1e188730-e249-4ddd-b9ed-f28d6f07a5e9.png">


