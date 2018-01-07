function Person(name,age){
  this.name = name;
  this.age = age;
}

let JG = new Person('JG',29);
let MH = new Person('MH',29);
let SG = new Person('SG',29);

Person.prototype.intro = function(){
  let greeting = 'Hi,I am '+ this.name+'.';
  console.log(greeting);
}

console.log(JG.name);
JG.intro();

Person.prototype.intro = function(){
  console.log('I hate EVERYTHING, '+this.name);
}
Person.prototype.name = 'Hello';
JG.intro();



