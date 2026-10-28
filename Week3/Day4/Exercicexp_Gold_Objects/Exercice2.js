const util = require('util');

function keysAndValues(obj) {
  const keys = Object.keys(obj).sort();
  const values = keys.map(key => obj[key]);
  return [keys, values];
}

// Transforme le résultat en texte pour l'afficher en entier
const printResult = (result) => console.log(util.inspect(result, { depth: null }));

printResult(keysAndValues({ a: 1, b: 2, c: 3 }));


printResult(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));


printResult(keysAndValues({ key1: true, key2: false, key3: undefined }));



