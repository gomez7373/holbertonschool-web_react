// Define the MajorCredits interface
interface MajorCredits {
    brand: 'MajorCredits'; // Unique identifier for MajorCredits
    credits: number;
  }
  
  // Define the MinorCredits interface
  interface MinorCredits {
    brand: 'MinorCredits'; // Unique identifier for MinorCredits
    credits: number;
  }
  
  // Function to sum MajorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      brand: 'MajorCredits',
      credits: subject1.credits + subject2.credits
    };
  }
  
  // Function to sum MinorCredits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      brand: 'MinorCredits',
      credits: subject1.credits + subject2.credits
    };
  }
  
  // Test the functions
  const major1: MajorCredits = { brand: 'MajorCredits', credits: 10 };
  const major2: MajorCredits = { brand: 'MajorCredits', credits: 15 };
  
  const minor1: MinorCredits = { brand: 'MinorCredits', credits: 5 };
  const minor2: MinorCredits = { brand: 'MinorCredits', credits: 8 };
  
  // Output the results to the webpage
  const output = `
    <h1>Credits Sum</h1>
    <p>Major Credits Sum: ${sumMajorCredits(major1, major2).credits}</p>
    <p>Minor Credits Sum: ${sumMinorCredits(minor1, minor2).credits}</p>
  `;
  
  document.body.innerHTML = output; // Replace the body content with the output string
  