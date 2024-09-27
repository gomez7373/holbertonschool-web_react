// Define the Teacher interface
interface Teacher {
    readonly firstName: string;  // Can only be set during initialization
    readonly lastName: string;   // Can only be set during initialization
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;  // Optional property
    location: string;
    [propName: string]: any;     // To allow additional properties
  }
  
  // Define the Directors interface that extends Teacher
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Create an example Teacher object
  const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,  // Additional property
  };
  
  // Create an example Director object
  const director1: Directors = {
    firstName: 'Jane',
    lastName: 'Smith',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  // Log the teacher3 and director1 objects to the console
  console.log(teacher3);
  console.log(director1);
  
  // Dynamically create content for HTML
  const body = document.querySelector('body');
  
  // Create a table to display the details
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  const headers = ['First Name', 'Last Name', 'Location', 'Full Time Employee', 'Number of Reports'];
  headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);
  
  // Add rows for Teacher and Director
  const addRow = (person: Teacher | Directors) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${person.firstName}</td>
      <td>${person.lastName}</td>
      <td>${person.location}</td>
      <td>${person.fullTimeEmployee}</td>
      <td>${'numberOfReports' in person ? (person as Directors).numberOfReports : 'N/A'}</td>
    `;
    table.appendChild(row);
  };
  
  addRow(teacher3);
  addRow(director1);
  
  // Append the table to the body
  body?.appendChild(table);
  