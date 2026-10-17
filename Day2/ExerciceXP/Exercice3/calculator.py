import operators

print("1)importing specific functions")
print(operators.addOperator(2,17))
print(operators.divideOperator(16,4))


from operators import addOperator, divideOperator


print("2) importing the whole module")
print(addOperator(10, 5))     
print(divideOperator(10, 5))  


import operators as op
from operators import addOperator as add, divideOperator as div


print("3) using alias")
print(op.addOperator(19, 8))   
print(op.divideOperator(64, 4))  
print(add(19, 8))              
print(div(64, 4))  