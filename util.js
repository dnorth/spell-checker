import fs from 'fs';

export const readDictionaryFile = (dictionaryPath) => {
    try {
        const dictionaryList = fs.readFileSync(dictionaryPath, 'utf8').split('\n');
        return new Set(dictionaryList)
    } catch (error) {
        console.error('There was an error parsing the dictionary file: ', error.message)
    }
} 

export const readComparisonFile = (comparisonFilePath) => {
    try {
        const wordFile = fs.readFileSync(comparisonFilePath, 'utf8')
        const noPunctuation = wordFile.replace(/[^A-Za-z\s]/g, '').toLowerCase();
        const wordList = noPunctuation.split(/\s+/);

        return wordList;
    } catch (error) {
        console.error('There was an error parsing the comparison file: ', error.message)
    }

}