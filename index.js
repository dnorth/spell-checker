import { checkSpelling } from './spell-checker.js';
import { readDictionaryFile, readComparisonFile } from './util.js';

const args = process.argv.slice(2);

const [pathToDictionary, pathToCompareFile] = args;

if (!pathToDictionary || !pathToCompareFile) {
    console.error("Error: Both a dictionary file and a file to compare are required.");
    process.exit(1);
}

try {
    const dictionarySet = readDictionaryFile(pathToDictionary);
    const wordList = readComparisonFile(pathToCompareFile);

    const spellCheck = checkSpelling(dictionarySet, wordList)
    console.log(spellCheck)
} catch (error) {
    console.error(`There was an error when trying to spell check the files: ${error.message}`);
    process.exit(1);
}