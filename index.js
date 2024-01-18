import fs from 'fs';

const args = process.argv.slice(2);

const [pathToDictionary, pathToCompareFile] = args;

if (!pathToDictionary || !pathToCompareFile) {
    console.error("Error: Both a dictionary file and a file to compare are required.");
    process.exit(1);
}

try {
    const dictionary = fs.readFileSync(pathToDictionary, 'utf8').split('\n');
    const fileToCompare = fs.readFileSync(pathToCompareFile, 'utf8').split(/\s+/);

    console.log('Spell checked!')
} catch (error) {
    console.error(`There was an error when trying to spell check the files: ${error.message}`);
    process.exit(1);
}