// In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.


function geometricSequenceElements(a, r, n){
    let result = [a];

    for (var x = 0; x < n - 1; x++) {
        result.push(result[x] * r);
    }
    return result.join(', ');
}



console.log(geometricSequenceElements(2, 3, 5)); //, '2, 6, 18, 54, 162')
console.log(geometricSequenceElements(1, -2, 10)); //, '1, -2, 4, -8, 16, -32, 64, -128, 256, -512')