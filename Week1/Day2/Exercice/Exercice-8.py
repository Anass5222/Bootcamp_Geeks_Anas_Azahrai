sandwich_orders=["Tuna sandwich","Pastrami sandwich", "Avocado sandwich","Pastrami sandwich","Egg sandwich","Chicken sandwich","Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:

    sandwich_orders.remove("Pastrami sandwich")


print( sandwich_orders)

finished_sandwich=[]

for i in range(4):

    finished_sandwich.append(sandwich_orders[i])
    i+=1

for i in range(4):  
    sandwich_orders.pop()
    i+=1
   
print(finished_sandwich)
print(sandwich_orders)


for i in range(4):
    print("I made your",finished_sandwich[i] )
    i+=1