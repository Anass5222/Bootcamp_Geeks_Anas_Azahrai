class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


cat1=Cat('louci',5)
cat2=Cat('milo',7)
cat3=Cat('tina',8)
cat4=Cat('lila',9)

def old_age(cats):
    return max(cats, key=lambda cat:cat.age)

cats=[cat1,cat2,cat3,cat4]

oldest_age=old_age(cats)
print("the oldest cat is",oldest_age.name, "and is",oldest_age.age,"years old.")

  