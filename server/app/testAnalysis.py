import math

def averageWordLength(stringList):
    out = 0
    wordCount = 0
    for s in stringList:
        out += len(s)-len(s.split()) 
        wordCount += len(s.split()) 
    return out/wordCount

def averageStringLength(stringList):
    out = 0
    for s in stringList:
        out += len(s)
    return out/len(stringList)

def syllablesInWord(word):
    word = word.lower()
    count = 0
    vowels = "aeiouy"
    if word[0] in vowels:
        count += 1
    for index in range(1, len(word)):
        if word[index] in vowels and word[index - 1] not in vowels:
            count += 1
    if word.endswith("e"):
        count -= 1
    if count == 0:
        count += 1
    return count

def averageReadingLevel(stringList):
    totalWords = 0
    totalSentences = 0
    totalSyllables = 0
    for s in stringList:
        totalSentences += 1
        for w in s:
            totalWords += 1
            totalSyllables += syllablesInWord(w)
    return 0.39*(totalWords/totalSentences)+11.8*(totalSyllables/totalWords)-15.59


