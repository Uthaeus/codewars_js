// The function bar_triang() or barTriang or bar-triang, receives the coordinates of the three vertices A, B and C as three different arguments and outputs the coordinates of the barycenter O in an array [xO, yO]


function barTriang(p1, p2, p3){
    let x = ((p1[0] + p2[0] + p3[0]) / 3).toFixed(4);
    let y = ((p1[1] + p2[1] + p3[1]) / 3).toFixed(4);
    return [+x, +y];
}



console.log(barTriang([4, 2], [12, 2], [6, 10])); //, [7.3333, 4.6667]))