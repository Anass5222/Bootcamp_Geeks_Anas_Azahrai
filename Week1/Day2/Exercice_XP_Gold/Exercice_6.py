
import random

win = 0
lost = 0

while True:
    number = input("Enter a number from 1 to 9 (or quit): ")

    if number.lower() == "quit":
        break

    if not number.isdigit() or int(number) < 1 or int(number) > 9:
        print("Enter a number between 1 and 9!")
        continue

    rand_number = random.randint(1, 9)
    print("Random number:", rand_number)

    if int(number) == rand_number:
        print("You win!")
        win += 1
    else:
        print("You lost!")
        lost += 1

print("Game finished!")
print("Number of wins:", win)
print("Number of losses:", lost)
print("Total games:", win + lost)