class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);

// Output: 3
// Explication :
// - counterOne commence avec count = 0, puis deux appels à increment() le
//   font passer à 2.
// - const counterTwo = counterOne; ne crée pas de copie : counterTwo et
//   counterOne pointent vers le même objet en mémoire (même référence).
// - counterTwo.increment() modifie donc ce même objet, et count passe à 3.
// - counterOne.count vaut donc 3, comme counterTwo.count.