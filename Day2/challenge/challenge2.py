words=input("Enter the word:")
liste=""

for car in words:
    if car not in liste:
     liste+=car

print(liste)