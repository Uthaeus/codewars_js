// We need a function count_sel() that receives an array or list of integers (positive and negative) and may give us the following information in the order and structure presented bellow:


function countSel(lst) {
    let breakdown = {}, itemsCount = 0;
    let mostCommon = [], singles = 0;

    for (let i = 0; i < lst.length; i++) {
        if (breakdown[lst[i]]) {
            breakdown[lst[i]]++;
        } else {
            breakdown[lst[i]] = 1
        }
    }

    let counts = Object.values(breakdown);
    let mostCommonCount = Math.max(...counts);
    
    for (let item in breakdown) {
        itemsCount++;
        if (breakdown[item] == mostCommonCount) {
            mostCommon.push(+item);
        }
        if (breakdown[item] == 1) {
            singles++;
        } 
    }
    let append = [mostCommon, mostCommonCount];
    return [lst.length, itemsCount, singles, append];
}



console.log(countSel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5])); //, [10, 7, 5, [[-5], 3]])