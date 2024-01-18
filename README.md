# Spell Checker
This simple spell checking library. It takes in as arguments the path to the dictionary file and the path of the file to check against.

# Usage
`yarn check-spelling {pathToDictionary} {pathToFileToCheck}`

- pathToDictionary: The path to a text dictionary file where each word is split into a new line.
- pathToFileToCheck: The path to a file that has contains text where each word is split by a whitespace character. Each word does not necessarily need to be on its own new line.

(To the reviewer... I hope you will forgive me for not making the program run in the binary-executable style shown in SPELL_CHECK.md. I was spending an unreasonable amount of time trying to figure out how to do it, that it made more sense to move on and just have a clear usage guide instead.)

# Running Tests
`yarn test`

# Prioritization philosophy

Prioritizing task work is extremely important to me as an engineer. Especially when working with deadlines and across organizations (e.g. PMs), it's important to have a clear understanding of what is a must-have, what is a should-have, and what is a nice-to-have so that way time constraints can be a positive forcing function rather than a stressful/negative one. 

For this task, here's my prioritized list of how I would work through this problem even if I don't end up having time to complete them all. 

### Must haves:
- Program outputs a list of incorrectly spelled words
- Program can operate quickly with a long list of words
- Program can handle punctuation and sentence-casing correctly
- Program has test cases covering important functionality

### Should haves:
- Program outputs a list of suggested words for each misspelled word
- Program handles proper nouns correctly

### Nice to haves:
- Program includes the line and column number of the misspelled word
- Program prints the misspelled word along with some surrounding context
- Program prints the misspelled word along with some surrounding context