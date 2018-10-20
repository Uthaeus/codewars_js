// There is no single treatment that works for every phobia, but some people cure it by being gradually exposed to the phobic situation or object. In this kata we will try curing arachnophobia by drawing primitive spiders.


function drawSpider(legSize, bodySize, mouth, eye) {
    let legsA, legsB;
    let bodyA, bodyB;
    let eyesA = "", eyesB = "";
    let eyes = Math.pow(2, bodySize) / 2

    switch (legSize) {
        case 1:
            legsA = '^';
            legsB = '^';
            break;
        case 2:
            legsA = "/\\";
            legsB = "/\\";
            break;
        case 3:
            legsA = "/╲";
            legsB = "╱\\";
            break;
        case 4:
            legsA = "╱╲";
            legsB = "╱╲";
    }
    switch (bodySize) {
        case 1:
            bodyA = "(";
            bodyB = ")";
            break;
        case 2:
            bodyA = "((";
            bodyB = "))";
            break;
        case 3:
            bodyA = "(((";
            bodyB = ")))";
            break;
    }
    for (var i = 0; i < eyes; i++) {
        eyesA += eye;
        eyesB += eye;
    }
    let spider = legsA + bodyA + eyesA + mouth + eyesB + bodyB + legsB;
    return spider;
}



console.log(drawSpider(3, 3, "w", "0")); //, "/╲(((0000w0000)))╱\\")
console.log(drawSpider(1, 1, "W", "o")); //, "^(oWo)^")