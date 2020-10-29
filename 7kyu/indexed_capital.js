// Given a string and an array of integers representing indices, capitalize all letters at the given indices.


function capitalize(s,arr){
    for (let x = 0; x < arr.length; x++) {
        if (s[arr[x]]) {
            s = s.slice(0, arr[x]) + s[arr[x]].toUpperCase() + s.slice(arr[x] + 1, s.length);
        }
    }
    return s;
};


console.log(capitalize("abcdef",[1,2,5,100])); //,'aBCdeF'