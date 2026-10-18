class Dog():

    def __init__(self,name,age,weight):
        self.name=name
        self.age=age
        self.weight=weight


    def bark(self):
        dog_name= self.name
        print(dog_name ,"is barking")


    def run_speed(self):

       return self.weight / self.age * 10

    
    

    def fight(self, other_dog):
      score1 = self.run_speed() * self.weight
      score2 = other_dog.run_speed() * other_dog.weight
  
      if score1 > score2:
         return f"{self.name} won the fight"
      elif score1 < score2:
         return f"{other_dog.name} won the fight"



dog1=Dog("rokey",6,40)
dog2=Dog("Max",5,45)
dog3=Dog("woof",7,36)
dog4=Dog("Max",9,48)

dog1.bark()
dog2.bark()
print(dog1.run_speed())
print(dog2.run_speed())
print(dog3.run_speed())
print(dog4.run_speed())
print(dog1.fight(dog3))
