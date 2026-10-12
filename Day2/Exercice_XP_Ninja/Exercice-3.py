paraghraph="Please keep it appropriate to the social context of our class."

print("number of characters:", len(paraghraph))

sentence=paraghraph.count(".")

print("numbers of sentence:", sentence)

word=paraghraph.split()

print("numbers of words:",len(word))

words=paraghraph.lower().split()
unique_word=set(words)

#Bonus 1
non_whitespace= sum(1 for char in  paraghraph if not char.isspace())

#Bonus 2
number_of_sentence=sentence
number_of_words=len(words)
number_of_unique_words=len(unique_word)
if number_of_sentence > 0:
    avg_words= number_of_words / number_of_sentence
else:
    avg_words = 0

#Bonus 3
non_unique_words=number_of_words - number_of_unique_words

print("number of unique words:",len(unique_word))
print("number of non unique words:",len(words)-len(unique_word))
print(f"Non-withespace characters:{non_whitespace}")
print(f"Average words per sentence:{avg_words: .2f}")



