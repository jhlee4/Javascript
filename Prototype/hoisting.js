hoisted();

function hoisted() {
  console.log('foo');
}

notHoisted();

var notHoisted = function() {
   console.log('bar');
};