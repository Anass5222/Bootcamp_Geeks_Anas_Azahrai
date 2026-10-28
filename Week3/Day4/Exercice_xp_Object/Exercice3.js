const users = { user1: 18273, user2: 92833, user3: 90315 };   

// ===== 1 : objet -> tableau de couples =====
const usersArray = Object.entries(users);                    

// ===== 2 : ID multiplié par 2 =====
const doubledIds = usersArray.map(([user, id]) => [user, id * 2]);  

// ===== Affichage complet, dans n'importe quelle console =====
function showPairs(pairs) {                                     
  const text = pairs                                            
    .map(([user, id]) => `[ '${user}', ${id} ]`)              
    .join(", ");                                               
  console.log(`[ ${text} ]`);                                  
}

showPairs(usersArray);                                         
showPairs(doubledIds);                                        

