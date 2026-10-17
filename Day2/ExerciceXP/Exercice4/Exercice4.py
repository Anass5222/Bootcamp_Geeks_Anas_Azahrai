from dogs import Dog
import random

class PetDog(Dog):  
    def __init__(self, name, height, trained=False):
        super().__init__(name, height)  
        self.trained = trained          

    def train(self):
        self.bark()                      
        self.trained = True              

    def play(self, *args):
        
        dog_names = ", ".join(dog.name for dog in args)
        print(f"{dog_names} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead",
            ]
            print(random.choice(tricks))   
        else:
            print(f"{self.name} is not trained yet")


# Tests
rex = PetDog("Rex", 50)
medor = Dog("Medor", 40)
fido = Dog("Fido", 35)

rex.do_a_trick()           
rex.train()                
rex.do_a_trick()           
rex.play(medor, fido)      