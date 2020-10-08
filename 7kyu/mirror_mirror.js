// You get a list of integers, and you have to write a function mirror that returns the "mirror" (or symmetric) version of this list: i.e. the middle element is the greatest, then the next greatest on both sides, the the next greatest, and so on...


function mirror(data) {
    let newArr = [...data].sort((a, b) => a - b);
    let added = newArr.slice(0, newArr.length - 1).reverse();

    return newArr.concat(added);
}


console.log(mirror([2, 3, 1])); //, expected: [1, 2, 3, 2, 1]))
console.log(mirror([2, 1]));
console.log(mirror([-8, 42, 18, 0, -16])); //, expected: [-16, -8, 0, 18, 42, 18, 0, -8, -16]))