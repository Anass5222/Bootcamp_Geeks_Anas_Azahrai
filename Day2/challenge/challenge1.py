
number=input("Enter the number:")
length=input("Enter the lenght of list:")
liste=[]
s=0
for i in range(int(length)):
    s=i*int(number)
    liste.append(s)
    i+=1
   

print(liste)