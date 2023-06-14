#!/usr/bin/node
const fs = require('fs');

function concatFiles(sourceFilePath1, sourceFilePath2, destinationFilePath) {
  try {
    // Read the content of the first source file
    const fileContent1 = fs.readFileSync(sourceFilePath1, 'utf8');

    // Read the content of the second source file
    const fileContent2 = fs.readFileSync(sourceFilePath2, 'utf8');

    // Concatenate the file contents
    const concatenatedContent = fileContent1 + '\n' + fileContent2;

    // Write the concatenated content to the destination file
    fs.writeFileSync(destinationFilePath, concatenatedContent);

    console.log('Files concatenated successfully.');
  } catch (error) {
    console.error('An error occurred while concatenating files:', error);
  }
}

// Extract command-line arguments
const [, , sourceFile1, sourceFile2, destinationFile] = process.argv;

// Call the concatFiles function with the provided file paths
concatFiles(sourceFile1, sourceFile2, destinationFile);
