import random

class MyList:
    def __init__(self, letters):
        self. letters= letters


    def reverse(self):
        
        return self.letters[::-1]
        

    def sorted(self):
        return sorted(self.letters)

    def liste(self):
        return [random.randint(1,10) for _ in self.letters]



mylist = MyList(["d", "a", "c", "b"])
print(mylist.letters)         
print(mylist.reverse()) 
print(mylist.sorted())   
print(mylist.liste())   