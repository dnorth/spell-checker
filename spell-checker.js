export const checkSpelling = (dictionarySet, wordList) => {
    const misspelledWordList = wordList.filter(word => checkSpellingOfWord(dictionarySet, word))
    return misspelledWordList.length ? misspelledWordList.join(', ') : 'There are no misspelled words! Congrats!';
}

const checkSpellingOfWord = (dictionarySet, word) => {
    return !dictionarySet.has(word);
}