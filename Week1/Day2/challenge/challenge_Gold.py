from datetime import datetime,date

Birthday=input("Enter your brithday the format DD/MM/YYYY:")

Birthday_str=datetime.strptime(Birthday, "%d/%m/%Y").date()

today=date.today()

age=today.year-Birthday_str.year
if (today.month, today.day)< (Birthday_str.month, Birthday_str.day):
    age -=1

c=age % 10
year= Birthday_str.year
leap_year=(year % 4==0 and year % 100!=0)or year % 400 ==0

def display_cake():

 print("  ___","i"*c,"___")
 print("  | :H:a:p:p:y: |")
 print("__|_____________|__")
 print("|^^^^^^^^^^^^^^^^^^| ")
 print("| :B:i:r:t:h:d:a:y:|")
 print("|                  |")
 print("~~~~~~~~~~~~~~~~~~~")


if leap_year:
    print("You were born in a leap year!")
    display_cake()
    print()
    display_cake()
else:
    display_cake()

