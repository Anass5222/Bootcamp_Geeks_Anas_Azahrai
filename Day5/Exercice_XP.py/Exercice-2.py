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




dog1=Dog("Max",40)
dog2=Dog("milono",30)

davids_dog=Dog("Rex",30)
sarahs_dog=Dog("sarahs_dog",20)

dogs = [dog1, dog2, davids_dog, sarahs_dog]

bigger_dog=dogs[0]

for dog in dogs:
     if dog.height>bigger_dog.height:
          bigger_dog=dog

print(f"the bigger dog is : {bigger_dog.name}")



dog2.bark()
davids_dog.bark()
davids_dog.jump()
davids_dog.introduction()
sarahs_dog.bark()
sarahs_dog.jump()
sarahs_dog.introduction()
