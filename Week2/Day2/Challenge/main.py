from text_analyzer import TextAnalyzer

analyzer = TextAnalyzer("Python is fun")
print(analyzer)               
print(len(analyzer))          
print(analyzer.word_count())   

try:
    empty = TextAnalyzer("")
except Exception as e:
    print(f"Error: {e}") 