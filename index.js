// Main class
class CoffeeMake {
  constructor(type) {
    this.type = type;
  }
  on() {
    alert('CoffeMachine on')
  }
  off() {
    alert('CoffeMachine off')
  }
}

//Drip
class DripMake extends CoffeeMake {
  constructor(type) {
    super(type);
  }
  firstMethod() {
    alert(`This coffee make type : ${this.type}`);
  }
  history() {
    alert(`Melitta Bentz created the first ${this.type} coffee maker using a filter she made out of blotting paper.\n\n`)
  }
}

//Coffee-Machine
class CoffeMachine extends CoffeeMake {
  constructor(type) {
    super(type);
  }
  firstMethod() {
    alert(`This coffee make type : ${this.type}`);
  }
  history() {
    alert(`1884 – The espresso machine was invented and patented by Angelo Moriondo. Yes, the espresso machine is over 130 years old! Unfortunately, Moriondo was never able to popularise the machine and it never really took off.\n
    \n`)
  }
}

//Carob
class CarobMake extends CoffeeMake {
  constructor(type, carobType) {
    super(type);
    this.carobType = carobType;
  }
  firstMethod() {
    alert(`This coffee make type : ${this.type}`);
  }
  mainType() {
    alert(`${this.type} main varieties is ${this.carobType}`)
  }
}

// Copies
let newCoffeeMachine = new DripMake('Drip');
let newCoffeeMachine2 = new CoffeMachine('Coffee-Machine');
let newCoffeeMachine3 = new CarobMake('Carob', 'Steam');


// Not interesting to console.log every time
function alertAll() {
  let ask = prompt(`What type of coffee maker you are interested in? : \n Drip,Carob,Coffee-Machine`)
  let lowerAsk = ask.toLowerCase();

  if (lowerAsk == 'drip') {
    newCoffeeMachine.firstMethod()
    newCoffeeMachine.history()
  }
  if(lowerAsk == 'carob'){
    newCoffeeMachine3.firstMethod()
    newCoffeeMachine3.mainType()
  }
  if(lowerAsk == 'coffee-machine'){
    newCoffeeMachine2.firstMethod()
    newCoffeeMachine2.history()
  }
}

alertAll()