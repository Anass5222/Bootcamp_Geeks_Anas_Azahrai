const products = require("./products");

function findProduct(productName) {
  return products.find(
    (product) => product.name.toLowerCase() === productName.toLowerCase()
  );
}

function printProduct(productName) {
  const product = findProduct(productName);

  if (product) {
    console.log(
      `Name: ${product.name} | Price: $${product.price} | Category: ${product.category}`
    );
  } else {
    console.log(`Product "${productName}" not found.`);
  }
}

printProduct("Laptop");
printProduct("T-shirt");
printProduct("backpack");   
printProduct("Television"); 