import { checkSpelling, checkSpellingAndMakeSuggestions, formatMisspelledWords } from './spell-checker'
import { readDictionaryFile, readComparisonFile } from './util'

describe('spell-checker', () => {
    const fullDictionarySet = readDictionaryFile('dictionary.txt')

    describe('checkSpelling', () => {
        describe('simple text files', () => {
            describe('when there are no misspelled words', () => {
                const simpleWordList = ['world']
                const actual = checkSpelling(fullDictionarySet, simpleWordList)
    
                it('should return an empty list', () => {
                    const expected = []
                    expect(actual).toEqual(expected)
                })
            })
            describe('when there is a misspelled word', () => {
                const misspelledWordList = ['hello', 'wozld']
                const actual = checkSpelling(fullDictionarySet, misspelledWordList)

                it('should return the misspelled word list', () => {
                    const expected = ['wozld']
                    expect(actual).toEqual(expected)
                })
            })

            describe('when there are multiple misspelled words', () => {
                const misspelledWordList = ['hello', 'wozld', 'huld']
                const actual = checkSpelling(fullDictionarySet, misspelledWordList)

                it('should return the full list of mispelled words', () => {
                    const expected = ['wozld', 'huld']
                    expect(actual).toEqual(expected)
                })
            })

            describe('when there is a long list of words with no misspelled words', () => {
                const longWordList = readComparisonFile('mock-data/simple-super-long-list-of-words.txt')
                const actual = checkSpelling(fullDictionarySet, longWordList)

                it('should return an empty list', () => {
                    const expected = []
                    expect(actual).toEqual(expected)
                })
            })
        })
        describe('complex text files', () => {
            describe('when there is a list of words with sentence casing and punctuation', () => {
                const longWordList = readComparisonFile('mock-data/complex-sentence-casing-and-punctuation.txt')
                const actual = checkSpelling(fullDictionarySet, longWordList)

                it('should return an empty list in a performant manner', () => {
                    const expected = []
                    expect(actual).toEqual(expected)
                })
            })
        })
    })

    describe('checkSpellingAndMakeSuggestions', () => {
        describe('when there are no misspelled words', () => {
            const simpleWordList = ['world']
            const actual = checkSpellingAndMakeSuggestions(fullDictionarySet, simpleWordList)

            it('should output that there are no misspelled words', () => {
                const expected = 'There are no misspelled words! Congrats!'
                expect(actual).toEqual(expected)
            })
        })
        describe('when there are misspelled words', () => {
            const misspelledWordList = ['hello', 'wozld', 'tierd']
            const actual = checkSpellingAndMakeSuggestions(fullDictionarySet, misspelledWordList)

            it('should output the formatted misspelled words with a few suggestions', () => {
                const expected = formatMisspelledWords([{ word: 'wozld', suggestions: ['woald', 'woalds', 'world']}, {word: 'tierd', suggestions: ['tier', 'tierce', 'tierced']}])
                expect(actual).toEqual(expected)
            })
        })
    })
})