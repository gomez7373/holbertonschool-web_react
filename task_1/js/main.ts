// Define the Teacher interface
interface Teacher {
  readonly firstName: string;  // Can only be set during initialization
  readonly lastName: string;   // Can only be set during initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;  // Optional property
  location: string;
  [propName: string]: any;     // To allow additional properties
}

// Create an example Teacher object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,  // Additional custom property
};

// Log the teacher3 object to the console
console.log(teacher3);

// Add the teacher's information to the DOM
const body = document.body;

// Create an h1 element for the title
const title = document.createElement('h1');
title.textContent = "Teacher Information";
body.appendChild(title);

// Create a table to display teacher's information
const table = document.createElement('table');
const tableHeader = `<tr><th>Property</th><th>Value</th></tr>`;
const tableContent = `
  <tr><td>First Name</td><td>${teacher3.firstName}</td></tr>
  <tr><td>Last Name</td><td>${teacher3.lastName}</td></tr>
  <tr><td>Full Time Employee</td><td>${teacher3.fullTimeEmployee}</td></tr>
  <tr><td>Location</td><td>${teacher3.location}</td></tr>
  <tr><td>Contract</td><td>${teacher3.contract}</td></tr>
`;

// Set table content and append to body
table.innerHTML = tableHeader + tableContent;
body.appendChild(table);

