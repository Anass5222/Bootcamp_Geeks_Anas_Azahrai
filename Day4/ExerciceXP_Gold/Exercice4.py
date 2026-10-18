import random


def throw_dice():
    return random.randint(1, 6)


def throw_until_doubles():
    number_of_throws = 0
    while True:
        dice1 = throw_dice()
        dice2 = throw_dice()
        number_of_throws += 1
        if dice1 == dice2:
            break
    return number_of_throws


def main():
    results = []
    for i in range(100):
        results.append(throw_until_doubles())

    total = sum(results)
    average = round(total / len(results), 2)

    print(f"Total throws: {total}")
    print(f"Average throws to reach doubles: {average}")


main()