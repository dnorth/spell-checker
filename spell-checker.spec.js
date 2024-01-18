import { checkSpelling } from './spell-checker'
import { readDictionaryFile, readComparisonFile } from './util'

describe('spell-checker', () => {
    const fullDictionarySet = readDictionaryFile('dictionary.txt')

    describe('checkSpelling', () => {
        describe('simple use cases', () => {
            describe('when there are no misspelled words', () => {
                const simpleWordList = ['world']
                const actual = checkSpelling(fullDictionarySet, simpleWordList)
    
                it('should output that there are no misspelled words', () => {
                    const expected = 'There are no misspelled words! Congrats!'
                    expect(actual).toEqual(expected)
                })
            })
            describe('when there is a misspelled word', () => {
                const misspelledWordList = ['hello', 'wozld']
                const actual = checkSpelling(fullDictionarySet, misspelledWordList)

                it('should output the misspelled word', () => {
                    const expected = 'wozld'
                    expect(actual).toEqual(expected)
                })
            })

            describe('when there are multiple misspelled words', () => {
                const misspelledWordList = ['hello', 'wozld', 'huld']
                const actual = checkSpelling(fullDictionarySet, misspelledWordList)

                it('should output the misspelled words in a list joined by a comma', () => {
                    const expected = 'wozld, huld'
                    expect(actual).toEqual(expected)
                })
            })

            describe('when there is a long list of words with no misspelled words', () => {
                const longWordList = readComparisonFile('mock-data/simple-super-long-list-of-words.txt')
                const actual = checkSpelling(fullDictionarySet, longWordList)

                it('should output that there are no misspelled words in a performant manner', () => {
                    const expected = 'There are no misspelled words! Congrats!'
                    expect(actual).toEqual(expected)
                })
            })

            describe('when there is a list of words with sentence casing and punctuation', () => {
                const longWordList = readComparisonFile('mock-data/simple-sentence-casing-and-punctuation.txt')
                const actual = checkSpelling(fullDictionarySet, longWordList)

                it('should output that there are no misspelled words in a performant manner', () => {
                    const expected = 'There are no misspelled words! Congrats!'
                    expect(actual).toEqual(expected)
                })
            })
        })
    })
})