
/*Example 0 */
var Module = (function () {

    var _privateMethod = function () {
      // private stuff
    };
  
    var publicMethod = function () {
      _privateMethod();
    };
    
    return {
      publicMethod: publicMethod
    };
  
  })();

/* Example 1 */
/*
var Module = (function () {

    var privateMethod = function () {
      // private
    };
  
    var someMethod = function () {
      // public
    };
  
    var anotherMethod = function () {
      // public
    };
    
    return {
      someMethod: someMethod,
      anotherMethod: anotherMethod
    };
  
  })();
*/  


/* Accessing private method */
/*
var Module = (function(){

    var privateMethod = function(message){
        console.log(message);
    };

    var publicMethod = function(text){
      privateMethod(text);
    };

    return{
        publicMethod: publicMethod
    };

})();

Module.publicMethod('Hello');
*/