// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.


function breakChocolate(n,m) {
    let result = n * m;

    return result <= 0 ? 0 : result - 1;
}



console.log(breakChocolate(5, 5)) // , 24)