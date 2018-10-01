// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:


function pillars(num_pill, dist, width) {
    // your code here
    let pre = (num_pill - 1) * (dist * 100);
    let withWidth;
    if (num_pill > 2) {
        withWidth = (num_pill - 2) * width;
        return pre + withWidth;
    } else {
        return pre;
    }
}



console.log(pillars(2, 20, 25)); // , 2000)
console.log(pillars(11, 15, 30)); // , 15270)