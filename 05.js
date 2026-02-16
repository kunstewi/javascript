// we can't use typeof because it would return everyting as object except the primitive types
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

console.log(getType([]))
