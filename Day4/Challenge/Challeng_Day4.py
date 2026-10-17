word = input("Enter a word: ").strip()

positions = {}

for index, letter in enumerate(word):
    if letter in positions:
        positions[letter].append(index)
    else:
        positions[letter] = [index]

print(positions)


