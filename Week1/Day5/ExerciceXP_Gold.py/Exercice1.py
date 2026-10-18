import math

class Circle:
    

    def __init__(self, radius=1.0):
        if radius <= 0:
            raise ValueError("Radius must be a positive number.")
        self.radius = radius

    def perimeter(self):
        return 2 * math.pi * self.radius

    def area(self):
        return math.pi * self.radius ** 2

    def definition(self):
        print(
            "A circle is the set of all points in a plane that are "
            "at the same distance (the radius) from a fixed point (the center)."
        )


###########################Test############################
if __name__ == "__main__":
    c = Circle(3)
    print(f"Radius: {c.radius}")
    print(f"Perimeter: {c.perimeter():.2f}") 
    print(f"Area: {c.area():.2f}")            
    c.definition()

    default = Circle()
    print(f"Default radius: {default.radius}")  
    print(f"Default area: {default.area():.2f}")  


    