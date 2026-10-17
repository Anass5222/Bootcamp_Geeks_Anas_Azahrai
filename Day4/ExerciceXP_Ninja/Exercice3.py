MORSE_CODE = {
    "A": ".-",    "B": "-...",  "C": "-.-.",  "D": "-..",   "E": ".",
    "F": "..-.",  "G": "--.",   "H": "....",  "I": "..",    "J": ".---",
    "K": "-.-",   "L": ".-..",  "M": "--",    "N": "-.",    "O": "---",
    "P": ".--.",  "Q": "--.-",  "R": ".-.",   "S": "...",   "T": "-",
    "U": "..-",   "V": "...-",  "W": ".--",   "X": "-..-",  "Y": "-.--",
    "Z": "--..",
    "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
    "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
}

REVERSE_MORSE = {code: letter for letter, code in MORSE_CODE.items()}


def english_to_morse(text):
    words = text.upper().split()
    morse_words = []
    for word in words:
        letters = [MORSE_CODE[char] for char in word if char in MORSE_CODE]
        morse_words.append(" ".join(letters))
    return " / ".join(morse_words)


def morse_to_english(morse):
    words = morse.split(" / ")
    english_words = []
    for word in words:
        letters = [REVERSE_MORSE[code] for code in word.split() if code in REVERSE_MORSE]
        english_words.append("".join(letters))
    return " ".join(english_words)


morse = english_to_morse("Hello World")
print(morse)                    
print(morse_to_english(morse))  