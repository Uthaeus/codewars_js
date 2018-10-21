// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).


function hello(name = 'world') {
    let n = name.charAt(0).toUpperCase() + name.slice(1);
    return `Hello, ${n}!`;
}



console.log(hello()); //, 'Hello, World!', "returns 'Hello, World!' when name is not given")