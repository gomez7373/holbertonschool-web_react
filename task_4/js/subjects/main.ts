// Define the interface for the constructor of StudentClass
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  // Define the interface for StudentClass
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implement the StudentClass
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Method to simulate working on homework
    workOnHomework(): string {
      return 'Currently working';
    }
  
    // Method to return the student's first name
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Create a new instance of StudentClass
  const student = new StudentClass('John', 'Doe');
  
  // Log the output to the console
  console.log(student.displayName());
  console.log(student.workOnHomework());
  