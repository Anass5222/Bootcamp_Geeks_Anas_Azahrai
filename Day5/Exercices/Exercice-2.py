

#def ticket(name,age):
    
    #if age<=3:
        #print(name,"The ticket is free")
        
        #print(cost)
    #elif 3<age<=12:
        #print(name,"The ticket is 10$")
        
    #elif age>12:
        #print(name,"The ticket is 15$")
   

    
family = {"rick":43, 'beth':13,'morty':5,'summer':8}

total_cost=0
for name, age in family.items():
    if age<=3:
        price=0
        
    elif 3<age<=12:
        
        price=10
       
    elif age>12:
       
        price=15

    print(f"{name.capitalize()} has to pay ${price}")

    total_cost += price 
print(f"Total cost for the family: $ {total_cost}")


family={
}
numbers=input("how many  membre the family do you want add:")
for i in range(int(numbers)):
   
    name=input("Name :")
    age=input(f"age of {name}:")
    family[name]=age

print(family)