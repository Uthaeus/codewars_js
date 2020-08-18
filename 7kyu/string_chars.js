// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters,


function solve(s){
    let up = 0; 
    let low = 0; 
    let nums = 0; 
    let special = 0;

    for (let x = 0; x < s.length; x++) {
        let temp = s.charCodeAt(x);

        if (temp >= 97 && temp <= 122) {
            low++;
        } else if (temp >= 65 && temp <= 90) {
            up++;
        } else if (temp >= 48 && temp <= 57) {
            nums++;
        } else {
            special++;
        }
    }

    return [up, low, nums, special];
}


console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H")); //,[9,9,6,9])