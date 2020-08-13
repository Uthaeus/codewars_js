// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).


function hello(name) {
  if (name) {
    name = name.toLowerCase().replace(name[0], name[0].toUpperCase());
  } else {
    name = "World";
  }
  console.log(`Hello, ${name}`);
}

hello('johN') //, 'Hello, John!', "returns 'Hello, John!' when given 'johN'"