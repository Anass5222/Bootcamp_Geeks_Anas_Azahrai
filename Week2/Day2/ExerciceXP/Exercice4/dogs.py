class Dog():
    def __init__(self,name,height):

          self.name=name
          self.height=height


   
    def bark(self):
         dog_name=self.name
         print(f"{dog_name} goes woof!")


    def introduction(self):
         print(f"the name of dog is : {self.name} and the heigth is : {self.height}")


    def jump(self):
         dog_name=self.name
         x=self.height*2

         print(f"{dog_name} jumps {x} cm high")