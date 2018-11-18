// Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.


function capitalsFirst(str){
    let strArr = str.split(' ');
    let ups = [], downs = [];

    for (let x = 0; x < strArr.length; x++) {
        let code = strArr[x].charCodeAt(0);
        if (code >= 65 && code <= 90) {
            ups.push(strArr[x]);
        } else if (code >= 97 && code <= 122) {
            downs.push(strArr[x]);
        }
    }

    let result = ups.concat(downs);
    return result.join(' ');
}



console.log(capitalsFirst("hey You, Sort me Already!")); //, "You, Sort Already! hey me")