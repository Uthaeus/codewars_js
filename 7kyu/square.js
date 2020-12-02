// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.


function generateShape(integer){
    let result = [];

    for (let x = 0; x < integer; x++) {
        let temp = '+'.repeat(integer);
        result.push(temp);
    }
    return result.join('\n');
}


console.log(generateShape(8)); // , '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'