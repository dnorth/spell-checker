# Spell Checker
This simple spell checking library. It takes in as arguments the path to the dictionary file and the path of the file to check against.

# Usage
`yarn check-spelling {pathToDictionary} {pathToFileToCheck}`

- pathToDictionary: The path to a text dictionary file where each word is split into a new line.
- pathToFileToCheck: The path to a file that has contains text where each word is split by a whitespace character. Each word does not necessarily need to be on its own new line. Sentence-casing is acceptable and punctuation is ignored.

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
- Program handles conjunction words correctly

### Nice to haves:
- Program includes the line and column number of the misspelled word
- Program prints the misspelled word along with some surrounding context
- Program prints the misspelled word along with some surrounding context

# How I spent my time

Given the prioritization philosophy above, I just want to talk about how I spent my time working on this project.

You can see specific details of this in my git log history as I tried to make each commit a small chunk of work, but this is a high-level overview.

1. First I setup the project to have basic scaffolding and infrastructure for both the inputs and testing

2. Then I created a simple function that could pass simple examples including examples where there were no incorrectly spelled words

3. It was at this point where I started noticing a red flag in my code. Given the way it was setup to filter from a list and then check if the dictionary included that list, I had a function that was O(n^2) in time complexity. While generally I believe we shouldn't try to pre-optimize code, given the nature of my function as something that needed to parse a possibly large file quickly, it was important to me to reduce that time as soon as possible in order to handle large files.  
Since Javascript's Set has an O(1) search function (.has()), I knew that would be a much better fit than the array prototype .includes(). This would take my function from O(n^2) time complexity to O(n) time complexity with very little effort. I added a test to verify this and my simple dictionary function went from testing the super-long-list-of-words.txt in 20 seconds to passing in 0.67 seconds. Excellent!

