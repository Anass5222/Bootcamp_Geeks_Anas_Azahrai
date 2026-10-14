Brand={'name': 'Zara' ,
'creation_date': 1975 ,
'creator_name': ['Amancio', 'Ortega' ,'Gaona' ],
'type_of_clothes':[ "men", "women", "children", "home" ],
'international_competitors':[" Gap", "H&M", "Benetton" ],
'number_stores': 7000 ,
'major_color':{ 
    'France': 'blue', 
    'Spain': 'red', 
    'US':[ "pink", "green"]}}

print(Brand)

Brand['number_stores']=2
print(Brand)
print("Zara's clients are: " + ", ".join(Brand["type_of_clothes"]))

Brand['country_creation']='Spain'
print(Brand)

if 'country_creation' in Brand:
    Brand['international_competitors'].append('Desigual')

print(Brand)

del Brand['creation_date']
print(Brand)

print(Brand['international_competitors'][-1])

print(Brand['major_color']['US'])

print(len(Brand))

more_on_zara={

    'creation_date': 1975,
    'number_stores': 10000
 }

Brand.update(more_on_zara)

print(Brand)
print(Brand["number_stores"])