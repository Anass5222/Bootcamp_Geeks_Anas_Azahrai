import turtle

import math
from functools import total_ordering


@total_ordering
class Circle:

    def __init__(self, radius=None, diameter=None):
        if radius is None and diameter is None:
            raise ValueError("Give a radius or a diameter.")
        if radius is not None and diameter is not None:
            raise ValueError("Give only one: radius or diameter, not both.")
        if radius is None:
            radius = diameter / 2
        if radius <= 0:
            raise ValueError("The size must be a positive number.")
        self.radius = radius

    @property
    def diameter(self):
        return self.radius * 2

    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return (f"Circle(radius={self.radius}, diameter={self.diameter}, "
                f"area={self.area():.2f})")

    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)

    def __eq__(self, other):
        return self.radius == other.radius

    def __lt__(self, other):
        return self.radius < other.radius


if __name__ == "__main__":
    c1 = Circle(radius=2)
    c2 = Circle(diameter=10)  
    c3 = Circle(radius=1)

    print(c1)
    print(c2.radius, c2.diameter)       
    print(f"{c1.area():.2f}")           

    print(c1 + c2)                      
    print(c1 > c2)                      
    print(c1 == Circle(radius=2))       

    circles = [c1, c2, c3]
    circles.sort()
    for c in circles:
        print(c)                       


import turtle


def draw_circles(circles):
    t = turtle.Turtle()
    t.speed(0)
    t.penup()
    t.goto(-300, 0)

    for c in sorted(circles):
        t.pendown()
        t.circle(c.radius * 10)    
        t.penup()
        t.forward(c.radius * 20 + 20)  

    turtle.done()


draw_circles([Circle(radius=5), Circle(radius=1), Circle(radius=3)])