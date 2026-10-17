
def sum(numbers):
    total=0
    for n in numbers:

        try :
            
          total+=n
        except TypeError :
           pass
    return total

print(sum([1,6,7,"ten","four",8,3,4]))