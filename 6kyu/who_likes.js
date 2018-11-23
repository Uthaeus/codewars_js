// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:


function likes(names) {
    switch (names.length) {
        case 0:
            return 'no one likes this';
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}



console.log(likes(['Max', 'John', 'Mark'])); //, 'Max, John and Mark like this')
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); //, 'Alex, Jacob and 2 others like this')