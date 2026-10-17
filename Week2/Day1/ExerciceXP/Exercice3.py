class Family():
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False  

    def family_presentation(self):
        print(f"Family name: {self.last_name}")
        for member in self.members:
            print(member)


members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

family = Family(members, "Ilyass")


family.born(name='Ali', age=0, gender='Male', is_child=True)
print(family.is_18('Michael'))   
print(family.is_18('Ali'))       
family.family_presentation()