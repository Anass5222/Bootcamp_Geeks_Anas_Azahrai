manufacturers_str = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

manufacturers = manufacturers_str.split(", ")

print(f"The number of manufacturers/companies are in the list : {len(
manufacturers)}")

order=" ".  join(sorted(manufacturers,reverse=True))
print("The number of manufacturers/companies are in the list ,order (Z-A);" ,order)


count_o = len([name for name in manufacturers if "o" in name.lower()])
print(f"Names with the letter 'o': {count_o}")


count_no_i = len([name for name in manufacturers if "i" not in name.lower()])
print(f"Names without the letter 'i': {count_no_i}")

list_companies=["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]


unique=list(set(list_companies))
unique1=list(dict.fromkeys(list_companies))

sorted_companies = sorted(unique)
reversed_names = [name[::-1] for name in sorted_companies]



print(", ".join(unique1))                    
print(f"{len(unique1)} manufacturers")
print(reversed_names)
