class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
        else:
            print(f"{new_animal} already exists in the zoo.")

    def get_animals(self):
        print("The animals of the zoo:", self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        else:
            print(f"{animal_sold} does not exist in the zoo.")

    def sort_animals(self):
        sorted_animals = sorted(self.animals, key=str.lower)
        grouped_animals = {}

        for animal in sorted_animals:
            first_letter = animal[0].upper()

            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = []

            grouped_animals[first_letter].append(animal)

        return grouped_animals
    
    def get_groups(self):
      groups = self.sort_animals()

      for letter, animals in groups.items():
        print(f"{letter}: {', '.join(animals)}")




zoo2 = Zoo("wold")

zoo2.add_animal("Ape")
zoo2.add_animal("Baboon")
zoo2.add_animal("Bear")
zoo2.add_animal("Cat")
zoo2.add_animal("Cougar")
zoo2.add_animal("Eel")
zoo2.add_animal("Emu")

zoo2.get_groups()

new_york_zoo=Zoo("Newyork")

new_york_zoo.add_animal("cow")
new_york_zoo.add_animal("lion")
new_york_zoo.get_animals()
new_york_zoo.sell_animal("cow")
new_york_zoo.sort_animals()
new_york_zoo.get_groups()

new_york_zoo = Zoo("New York Zoo")
new_animal = input("Which animal should we add to the zoo --> ")
new_york_zoo.add_animal(new_animal)
new_york_zoo.get_animals()