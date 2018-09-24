// We need a method in the List Class that may count specific digits from a given list of integers. This marked digits will be given in a second list. The method .count_spec_digits()/.countSpecDigits() will accept two arguments, a list of an uncertain amount of integers 


function List(){
    this.countSpecDigits=function(integersList, digitsList){
        let counts = {};
        let result = [];

        for (let num in integersList) {
            let tempNum = integersList[num].toString().replace(/[^0-9]/g, '').split('').map(a => +a);

            for (let n in tempNum) {
                if (counts[tempNum[n]]) {
                    counts[tempNum[n]]++;
                } else {
                    counts[tempNum[n]] = 1;
                }
            }
        }

        for (let x = 0; x < digitsList.length; x++) {
            let temp = [digitsList[x], counts[digitsList[x]] || 0];
            result.push(temp);
        }
        return result;
    }
}


var l = new List();

// integersList =  [1, 1, 2, 3, 1, 2, 3, 4];
// digitsList = [1, 3];
// console.log(l.countSpecDigits(integersList, digitsList));
// //,[[1, 3], [3, 2]]

integersList = [-18, -31, 81, -19, 111, -888];
digitsList = [1, 8, 4];
console.log(l.countSpecDigits(integersList, digitsList));
//, [[1, 7], [8, 5], [4, 0]]
