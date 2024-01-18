export const checkSpelling = (dictionarySet, wordList) => {
    return wordList.filter(word => checkSpellingOfWord(dictionarySet, word))
}

const checkSpellingOfWord = (dictionarySet, word) => {
    return !dictionarySet.has(word);
}

export const checkSpellingAndMakeSuggestions = (dictionarySet, wordList) => {
    const misspelledWords = checkSpelling(dictionarySet, wordList);

    const misspelledWordsWithSuggestions = misspelledWords.map(word => getMispelledWordSuggestions(word, dictionarySet))

    return misspelledWords.length ? formatMisspelledWords(misspelledWordsWithSuggestions) : 'There are no misspelled words! Congrats!'
}

const getMispelledWordSuggestions = (misspelledWord, dictionarySet) => {
    const MAX_SUGGESTIONS = 3;
    let suggestions = [];

    dictionarySet.forEach(word => {
      let matches = countLetterMatches(misspelledWord, word);
      suggestions.push({ word, matches });
    });
  
    suggestions.sort((a, b) => b.matches - a.matches);
  
    const topSuggestions = suggestions.slice(0, MAX_SUGGESTIONS).map(s => s.word);

    return { word: misspelledWord, suggestions: topSuggestions }
}

const countLetterMatches = (misspelledWord, dictionaryWord) => {
    let matches = 0;
    for (let i = 0; i < Math.min(misspelledWord.length, dictionaryWord.length); i++) {
      if (misspelledWord[i] === dictionaryWord[i]) {
        matches++;
      }
    }
    return matches;
  }

export const formatMisspelledWords = (misspelledWordsWithSuggestions) => (
    `You have some misspelled words. \n${misspelledWordsWithSuggestions.map(wordObj => 
        `\t${wordObj.word}: Did you mean one of these words? [${wordObj.suggestions.join(', ')}]`
    ).join('\n')}
    `
)