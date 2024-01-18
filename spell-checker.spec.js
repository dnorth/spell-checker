import fs from 'fs';
import { checkSpelling } from './spell-checker'

describe('spell-checker', () => {
    const fullDictionary = fs.readFileSync('dictionary.txt', 'utf8').split('\n');


    describe('checkSpelling', () => {
        describe('simple use cases', () => {
            describe('when there are no misspelled words', () => {
                const simpleDictionary = ['hello', 'world']
                const simpleWordList = ['world']
                const actual = checkSpelling(simpleDictionary, simpleWordList)
    
                it('should output that there are no misspelled words', () => {
                    const expected = 'There are no misspelled words! Congrats!'
                    expect(actual).toEqual(expected)
                })
            })
            describe('when there is a misspelled word', () => {
                const simpleDictionary = ['hello', 'world']
                const misspelledWordList = ['hello', 'wold']
                const actual = checkSpelling(simpleDictionary, misspelledWordList)

                it('should output the misspelled word', () => {
                    const expected = 'wold'
                    expect(actual).toEqual(expected)
                })
            })

            describe('when there are multiple misspelled words', () => {
                const simpleDictionary = ['hello', 'world']
                const misspelledWordList = ['hello', 'wold', 'huld']
                const actual = checkSpelling(simpleDictionary, misspelledWordList)

                it('should output the misspelled words in a list joined by a comma', () => {
                    const expected = 'wold, huld'
                    expect(actual).toEqual(expected)
                })
            })
        })
    })
})