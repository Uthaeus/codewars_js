//Create a method is_uppercase() to see whether the string is ALL CAPS. 


String.prototype.isUpperCase = function() {return this == this.toUpperCase()}


console.log('hello I AM DONALD'.isUpperCase()) //, false)
console.log('HELLO I AM DONALD'.isUpperCase()) //, true)