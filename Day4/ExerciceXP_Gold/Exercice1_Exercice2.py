birthdays={
    "Omar":"02/09/2002",
    "Ilyass":"18/06/1992",
    "Hamza":"22/10/2004",
    "Anas":"04/01/2001",
    "Saaid":"29/11/1997"
}
print(birthdays.keys())

print("Welcome to the Birthday Look-up program!")
print("Welcome ,you can look up the birthdays of the people in the list!")

try:
    name = input("Enter the person's name: ").strip().title()
except KeyboardInterrupt:
    print("\nProgram stopped by the user.")
    exit()

if name in birthdays:
  print(f"{name}'s birthday is on {birthdays[name]}.")
else:
  print(f"Sorry, we don't have the birthday of {name}.")

