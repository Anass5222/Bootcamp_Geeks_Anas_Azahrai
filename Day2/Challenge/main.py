from text_analyzer import TextAnalyzer

analyzer = TextAnalyzer("Python is fun")
print(analyzer)               # TextAnalyzer object with 3 words
print(len(analyzer))          # 13
print(analyzer.word_count())  # 3

# Testing the exception
try:
    empty = TextAnalyzer("")
except Exception as e:
    print(f"Error: {e}") 