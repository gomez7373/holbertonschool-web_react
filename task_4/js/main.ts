// Interface for the constructor of StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for StudentClass methods and properties
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of the StudentClass based on the interfaces
class MyStudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method returning "Currently working"
  workOnHomework(): string {
    return "Currently working";
  }

  // Method returning the firstName of the student
  displayName(): string {
    return this.firstName;
  }
}

// Create an instance of MyStudentClass
const student1 = new MyStudentClass("John", "Doe");

// Create DOM elements and render to the page
const appDiv = document.createElement("div");
appDiv.innerHTML = `
  <h1>${student1.displayName()}</h1>
  <p>${student1.workOnHomework()}</p>
`;

// Append the created elements to the body of the document
document.body.appendChild(appDiv);
