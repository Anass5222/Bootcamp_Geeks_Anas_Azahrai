def compute_sum(x):

    total=0
    for i in range(1,5):
        total+=int(str(x)*i)
    return total


print(compute_sum(3))

print(compute_sum(5))