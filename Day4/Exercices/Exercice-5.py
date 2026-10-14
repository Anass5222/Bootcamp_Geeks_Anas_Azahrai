import random 

def generate():

    number=input("Enter the number between 1 and 100:")
    rand_number = random.randint(1, 100)

    if number==rand_number :
        print("You are success")

    else:
        print("You are fail", "your number is:" ,number,"random number:",rand_number)

print(generate())
