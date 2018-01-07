//class : ReferenceError
// var p  = new Rectangle('Bob');

// class Rectangle{
//     constructor(name){
//        console.log(name);
//     }
// };

function Triangle(name){
    console.log(name);
}
var p = new Triangle('Josh');


//hoisting
/*
hoisted();

function hoisted() {
  console.log('foo');
}

notHoisted();

var notHoisted = function() {
   console.log('bar');
};
*/