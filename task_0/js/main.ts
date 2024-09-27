// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Dynamically render a table and append rows for each student
const body = document.body;
const table = document.createElement('table');

// Create table header
const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell();
headerCell1.textContent = 'First Name';
const headerCell2 = headerRow.insertCell();
headerCell2.textContent = 'Location';

// Populate the table with student data
studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  firstNameCell.textContent = student.firstName;
  const locationCell = row.insertCell();
  locationCell.textContent = student.location;
});

// Append the table to the body
body.appendChild(table);

