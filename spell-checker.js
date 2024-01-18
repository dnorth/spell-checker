export const checkSpelling = (dictionaryList, wordList) => {
    const misspelledWordList = wordList.filter(word => checkSpellingOfWord(dictionaryList, word))
    return misspelledWordList.length ? misspelledWordList.join(', ') : 'There are no misspelled words! Congrats!';
}

const checkSpellingOfWord = (dictionaryList, word) => {
    return !dictionaryList.includes(word);
}