const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
};

// 2. Number of floors
console.log(building.numberOfFloors); 

// 3. Apartments on floors 1 and 3
console.log(building.numberOfAptByFloor.firstFloor);  
console.log(building.numberOfAptByFloor.thirdFloor);  

// 4. Second tenant's name and number of rooms
const secondTenant = building.nameOfTenants[1];
console.log(secondTenant); 
console.log(building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0]); 

// 5. Compare rents and update Dan's rent if needed
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan);