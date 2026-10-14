import random

def get_random_temp(season):
    if season == "winter":
        temp = random.uniform(-10, 16)
        print(temp)

    elif season in ["autumn", "fall"]:
        temp = random.uniform(16, 19)
        print(temp)
    elif season == "spring":
        temp = random.uniform(20, 25)
        print(temp)
    elif season == "summer":
        temp = random.uniform(26, 40)
        print(temp)
    
    print("The season is", season.capitalize())
    return temp


def main():
    month = int(input("Enter the month number (1-12): "))

    if month < 1 or month > 12:
        print("Invalid month!")
        return

    if month in [12, 1, 2]:
        season = "winter"
    elif month in [3, 4, 5]:
        season = "spring"
    elif month in [6, 7, 8]:
        season = "summer"
    else:
        season = "autumn"

    print("The season is:", season.capitalize())
    t=get_random_temp(season)
    if t < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif 0 <= t < 16:
        print("Quite chilly! Don't forget your coat.")
    elif 16 <= t < 23:
        print("Good temperature.")
    elif 23 <= t < 32:
        print("The temperature is high.")
    else:
        print("The temperature is very high")


main()


