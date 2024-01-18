import fs from 'fs';
import { checkSpelling } from './spell-checker.js';

const args = process.argv.slice(2);

const [pathToDictionary, pathToCompareFile] = args;

if (!pathToDictionary || !pathToCompareFile) {
    console.error("Error: Both a dictionary file and a file to compare are required.");
    process.exit(1);
}

try {
    const dictionaryList = fs.readFileSync(pathToDictionary, 'utf8').split('\n');
    const wordList = fs.readFileSync(pathToCompareFile, 'utf8').split(/\s+/);

    const spellCheck = checkSpelling(dictionaryList, wordList)
    console.log(spellCheck)
} catch (error) {
    console.error(`There was an error when trying to spell check the files: ${error.message}`);
    process.exit(1);
}