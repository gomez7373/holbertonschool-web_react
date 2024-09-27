// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;  // To allow additional properties
  }
  
  // Define the Directors interface that extends Teacher
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Define the interface for the function printTeacher
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implement the printTeacher function
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Add function to display the result in the HTML
  const displayContent = (content: string) => {
    const body = document.getElementsByTagName('body')[0];
    const div = document.createElement('div');
    div.innerHTML = `<h1>${content}</h1>`;
    body.appendChild(div);
  };
  
  // Test printTeacher function and display the result
  const teacherResult = printTeacher("John", "Doe");
  displayContent(teacherResult);  // Should display "J. Doe"
  
  // Example Director object
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  // Display the director object as well
  const directorInfo = `
    Director Info:<br>
    First Name: ${director1.firstName}<br>
    Last Name: ${director1.lastName}<br>
    Location: ${director1.location}<br>
    Number of Reports: ${director1.numberOfReports}
  `;
  displayContent(directorInfo);
  