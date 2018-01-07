var objectA = {}
var objectB = {
    name : 'Jay',
    age : 30
}
var objectC = {
    name : 'Jay',
    age: 30,
    talk : function(){
        console.log('Talking');
    }
}

function ObjectA(){}
function ObjectB(name){
    console.log(name);
}
function ObjectC(name){
    this.name = name;
}
function ObjectD(name){
   this.name = name;
   this.talk = function talking(){
       console.log(this.name);
   }
}


objectC.talk();