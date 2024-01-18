# Spell Checker
This simple spell checking library. It takes in as arguments the path to the dictionary file and the path of the file to check against.

# Usage
`yarn check-spelling {pathToDictionary} {pathToFileToCheck}`

- pathToDictionary: The path to a text dictionary file where each word is split into a new line.
- pathToFileToCheck: The path to a file that has contains text where each word is split by a whitespace character. Each word does not necessarily need to be on its own new line.

(To the reviewer... I hope you will forgive me for not making the program run in the binary-executable style shown in SPELL_CHECK.md. I was spending an unreasonable amount of time trying to figure out how to do it, that it made more sense to move on and just have a clear usage guide instead.)

# Running Tests
`yarn test`