import { checkSpelling } from './spell-checker'

describe('spell-checker', () => {
    describe('checkSpelling', () => {
        describe('when there are no misspelled words', () => {
            const simpleDictionary = ['hello', 'world']
            const simpleWordList = ['wold']
            const actual = checkSpelling(simpleDictionary, simpleWordList)

            it('should output that there are no misspelled words', () => {
                const expected = 'There are no misspelled words! Congrats!'
                expect(expected).toBe(actual)
            })
        })
    })
})