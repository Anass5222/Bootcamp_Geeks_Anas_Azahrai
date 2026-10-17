class TextAnalyzer:
    def __init__(self, text):
        if not isinstance(text, str) or text.strip() == "":
            raise Exception("No text entered")
        self.text = text


#analyzer = TextAnalyzer("")

# Raises an Exception

    def  __str__(self):
     words=self.text.split()

     word=len(words)

     return f"The numbers of words is: {word}"

    def __len__(self):


       return len(self.text)
    def word_count(self):
        words = self.text.split()
        return len(words)

    def count_word(self, word):
    
        if not isinstance(word, str) or word.strip() == "":
            raise Exception("Word cannot be empty")
            
        words = self.text.split()
        return words.count(word)

    



analyzer = TextAnalyzer("Python is fun and nice")
resultat = str(analyzer)

print(resultat)
print(f"The number of characters is: {len(analyzer)}")
print(analyzer.word_count())
print(analyzer.count_word("Python"))




        